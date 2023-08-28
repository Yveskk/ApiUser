import 'package:flutter/material.dart';
import 'EditProfile.dart';
import 'UserPage.dart';

void main() {
  runApp(const MaterialApp(
    home: LoginPage(),
  ));
}

class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  late String firstName;
  late String lastName;
  late String ageText = "-";
  bool areFieldsValid = true;

  final TextEditingController firstNameController = TextEditingController();
  final TextEditingController lastNameController = TextEditingController();
  final TextEditingController ageController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Créer un profil"),
        backgroundColor: Colors.black,
        centerTitle: true,
        leading: _buildBackButton(),
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Stack(
                alignment: Alignment.center,
                children: [
                  Container(
                    width: 80,
                    height: 80,
                    decoration: const BoxDecoration(
                      color: Colors.grey,
                      shape: BoxShape.circle,
                    ),
                    child: const Center(
                      child: Icon(
                        Icons.person,
                        color: Colors.white,
                      ),
                    ),
                  ),
                  Positioned(
                    bottom: 0,
                    right: 0,
                    child: GestureDetector(
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => const EditProfilePage()),
                        );
                      },
                      child: Container(
                        decoration: const BoxDecoration(
                          shape: BoxShape.circle,
                          color: Colors.black,
                        ),
                        padding: const EdgeInsets.all(8),
                        child: const Icon(
                          Icons.edit,
                          color: Colors.white,
                          size: 16,
                        ),
                      ),
                    ),
                  ),
                ],
              ),
              SizedBox(height: 40),
              const Row(
                children: [
                  Text(
                    'First Name',
                    style: TextStyle(
                      color: Colors.black,
                      fontSize: 16,
                    ),
                  ),
                  Text(
                    '*',
                    style: TextStyle(
                      color: Colors.red,
                      fontSize: 16,
                    ),
                  ),
                ],
              ),
              MyTextField(
                hintText: 'Prénom',
                onChanged: (value) {
                  setState(() {
                    firstName = value;
                  });
                },
                controller: firstNameController,
                height: 5,
                borderRadius: 5,
              ),
              Visibility(
                visible: !areFieldsValid && firstName.isEmpty,
                child: Padding(
                  padding: EdgeInsets.symmetric(vertical: 5),
                  child: Text(
                    "Veuillez remplir ce champ.",
                    style: TextStyle(
                      color: Colors.red,
                      fontSize: 16,
                    ),
                  ),
                ),
              ),
              const SizedBox(height: 20),
              const Row(
                children: [
                  Text(
                    'Last name',
                    style: TextStyle(
                      color: Colors.black,
                      fontSize: 16,
                    ),
                  ),
                  Text(
                    '*',
                    style: TextStyle(
                      color: Colors.red,
                      fontSize: 16,
                    ),
                  ),
                ],
              ),
              MyTextField(
                hintText: 'Nom',
                onChanged: (value) {
                  setState(() {
                    lastName = value;
                  });
                },
                controller: lastNameController,
                height: 5,
                borderRadius: 5,
              ),
              Visibility(
                visible: !areFieldsValid && lastName.isEmpty,
                child: const Padding(
                  padding: EdgeInsets.symmetric(vertical: 5),
                  child: Text(
                    "Veuillez remplir ce champ.",
                    style: TextStyle(
                      color: Colors.red,
                      fontSize: 16,
                    ),
                  ),
                ),
              ),
              SizedBox(height: 20),
              const Row(
                children: [
                  Text(
                    'Age',
                    style: TextStyle(
                      color: Colors.black,
                    ),
                  ),
                ],
              ),
              MyTextField(
                hintText: 'Age',
                inputType: TextInputType.number,
                onChanged: (value) {
                  setState(() {
                    if (value.isEmpty) {
                      ageText = "-";
                    } else {
                      ageText = value;
                    }
                  });
                },
                controller: ageController,
                height: 5,
                borderRadius: 5,
              ),
              SizedBox(height: 40),
              ElevatedButton(
                onPressed: () {
                  if (lastName.isEmpty || firstName.isEmpty  ) {
                    setState(() {
                      areFieldsValid = false;
                    });

                     showDialog(
                      context: context,
                      builder: (BuildContext context) {
                        return AlertDialog(
                          title: Text('Echèc'),
                          content: Text(
                              'Erreur de saisi'),
                          actions: [
                            TextButton(
                              onPressed: () {
                                Navigator.of(context).pop();
                              },
                              child: Text('OK'),
                            ),
                          ],
                        );
                      },
                    );
                    
                  } else {
                    setState(() {
                      areFieldsValid = true;
                    });

                      showDialog(
                      context: context,
                      builder: (BuildContext context) {
                        return AlertDialog(
                          title: const Text('Succès'),
                          content: const Text(
                              'Les données ont été enregistrées avec succès.'),
                          actions: [
                            TextButton(
                              onPressed: () {
                                Navigator.of(context).pop();
                                Navigator.push(
                                  context,
                                  MaterialPageRoute(
                                      builder: (context) => const UserPage()),
                                );
                              },
                              child: const Text('OK'),
                            ),
                          ],
                        );
                      },
                    );

                    print("Prénom : $firstName");
                    print("Nom : $lastName");
                    print("Âge : $ageText");
                  }
                },
                style: ElevatedButton.styleFrom(
                  primary: Colors.black,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(5),
                  ),
                ),
                child: const SizedBox(
                  width: double.infinity,
                  child: Center(
                    child: Text(
                      'Save',
                      style: TextStyle(
                        color: Colors.white,
                      ),
                    ),
                  ),
                ),
              ),
              
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildBackButton() {
    return Center(
      child: IconButton(
        icon: const Icon(
          Icons.arrow_back,
          color: Colors.white,
          size: 20,
        ),
        onPressed: () {
          Navigator.pop(context);
        },
      ),
    );
  }
}

class MyTextField extends StatelessWidget {
  final String? hintText;
  final TextInputType? inputType;
  final Function(String) onChanged;
  final TextEditingController? controller;
  final double? height;
  final double? borderRadius;

  MyTextField({
    required this.hintText,
    required this.onChanged,
    this.inputType,
    this.controller,
    this.height,
    this.borderRadius,
  });

  @override
  Widget build(BuildContext context) {
    return TextFormField(
      keyboardType: inputType,
      controller: controller,
      decoration: InputDecoration(
        hintText: hintText,
        fillColor: Colors.grey[200],
        filled: true,
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(borderRadius ?? 10.0),
        ),
        focusedBorder: OutlineInputBorder(
          borderSide: const BorderSide(color: Colors.black),
          borderRadius: BorderRadius.circular(borderRadius ?? 10.0),
        ),
        contentPadding:
            height != null ? EdgeInsets.symmetric(vertical: height!) : null,
      ),
      onChanged: onChanged,
    );
  }
}
