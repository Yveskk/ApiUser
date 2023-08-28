import 'package:flutter/material.dart';

class Search extends StatefulWidget {
  const Search({Key? key}) : super(key: key);

  @override
  // ignore: library_private_types_in_public_api
  _SearchState createState() => _SearchState();
}

class _SearchState extends State<Search> {
  List<NotificationItem> notifications = [
    NotificationItem(
      name: 'Delete Yves',
      time: '10:00 ',
    ),
    NotificationItem(
      name: 'Update KOKOU',
      time: '11:30 ',
    ),
    NotificationItem(
      name: 'Update Yves',
      time: '10:00 ',
    ),
    NotificationItem(
      name: 'Ajouter KOKOU',
      time: '11:30 ',
    ),
    // Add more notifications as needed
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.black,
        centerTitle: true,
        title: const Text(
          "Notifications",
          style: TextStyle(
            color: Colors.white,
          ),
        ),
      ),
      body: ListView.builder(
        itemCount: notifications.length,
        itemBuilder: (context, index) {
          return buildNotificationItem(notifications[index]);
        },
      ),
    );
  }

  Widget buildNotificationItem(NotificationItem item) {
    return ListTile(
      leading: const CircleAvatar(
        backgroundColor: Colors.grey,
        radius: 20,
        child: Icon(
          Icons.notifications,
          color: Colors.white,
        ),
      ),
      title: Text(item.name),
      trailing: Text(item.time),
    );
  }
}

class NotificationItem {
  final String name;
  final String time;

  NotificationItem({
    required this.name,
    required this.time,
  });
}
