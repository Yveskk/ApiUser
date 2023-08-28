import 'package:flutter/material.dart';

import 'UserProfile.dart';

void main() {
  runApp(const MaterialApp(
    home: EditProfilePage(),
  ));
}

class EditProfilePage extends StatefulWidget {
  const EditProfilePage({super.key});

  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<EditProfilePage> {
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
        title: const Text("Modifier un profil"),
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
                  ),
                ],
              ),
              SizedBox(height: 40),
              Row(
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
              const SizedBox(height: 20),
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
                  if (lastName.isEmpty || firstName.isEmpty) {
                    setState(() {
                      areFieldsValid = false;
                    });

                    showDialog(
                      context: context,
                      builder: (BuildContext context) {
                        return AlertDialog(
                          title: const Text('Echèc'),
                          content: const Text('Erreur de saisi'),
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
                          title: const Text('Confirmation'),
                          content: const Text(
                              'Êtes-vous sûr de vouloir enregistrer les modifications ?'),
                          actions: [
                            TextButton(
                              onPressed: () {
                                Navigator.of(context).pop(); // Close the dialog

                                // Perform the save operation here
                                print("Prénom : $firstName");
                                print("Nom : $lastName");
                                print("Âge : $ageText");

                                Navigator.pushReplacement(
                                  context,
                                  MaterialPageRoute(
                                    builder: (context) => UserProfile(),
                                  ),
                                );
                              },
                              style: TextButton.styleFrom(
                                backgroundColor: Colors.black,
                              ),
                              child: const Text('Confirmer',
                                  style: TextStyle(color: Colors.white)),
                            ),
                            TextButton(
                              onPressed: () {
                                Navigator.of(context).pop(); // Close the dialog
                              },
                              style: TextButton.styleFrom(
                                backgroundColor: Colors.black,
                              ),
                              child: const Text('Annuler',
                                  style: TextStyle(color: Colors.white)),
                            ),
                          ],
                        );
                      },
                    );
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
                      'Edit profil',
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
    return Container(
      child: Center(
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

  const MyTextField({
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
        contentPadding: height != null ? EdgeInsets.symmetric(vertical: height!) : null,
      ),
      onChanged: onChanged,
    );
  }
}
