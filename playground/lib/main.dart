import 'package:flutter/material.dart';
import 'package:setup/setup.dart';

main() {
  runApp(const App());
}

class App extends SetupWidget {
  const App({super.key});

  @override
  Widget Function() setup() {
    final count = ref(0);

    ListView;

    return () {
      return MaterialApp(
        home: Scaffold(
          body: KeepAlive(
            keepAlive: true,
            child: obs(count, TestWidget.new),
          ),
          floatingActionButton: FloatingActionButton(
            onPressed: () => count.value++,
            child: Text('Rebuild'),
          ),
        ),
      );
    };
  }
}

class TestWidget extends SetupWidget {
  const TestWidget(this.count, {super.key, super.ref});

  final int count;

  @override
  Widget Function() setup() {
    final ref = useWidgetRef<TestWidget>();

    onActivated(() {
      print('onActivated');
    });

    return () {
      return Text('Count: ${ref.widget?.count}');
    };
  }
}
