import React from 'react'
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const contactsData = [
  {
    id: 1,
    firstName: 'Arvin',
    lastName: 'Latch',
    email: 'arvinl@aol.fr',
    phoneNumber: '06 84 12 23 25',
    profilePicture: 'https://static.generated.photos/vue-static/face-generator/landing/wall/20.jpg',
  },
  {
    id: 2,
    firstName: 'Fédérica',
    lastName: 'Madeira',
    email: 'fede.madeira@gmail.com',
    phoneNumber: '06 25 07 77 57',
    profilePicture:
      'https://i.seadn.io/gae/_fy_SHzXyxgbeFfFyqZ8JpQ48a_w4Wl50b8FSPjNW7wV8FzYp_Ag3S6DdcZfFlSeg78_QfgVcZ3vSL4_nJbQEthOfQWPHjYv0gOpyA?auto=format&dpr=1&w=1000',
  },
  // Ajoutez d'autres contacts ici...
]

const ContactListItem = ({ contact }) => {
  return (
    <View style={styles.contactContainer}>
      <Image source={{ uri: contact.profilePicture }} style={styles.profilePicture} />
      <View style={styles.contactInfo}>
        <Text style={styles.name}>{`${contact.firstName} ${contact.lastName}`}</Text>
        <Text>{contact.email}</Text>
        <Text>{contact.phoneNumber}</Text>
      </View>
      <TouchableOpacity onPress={() => {}} style={styles.iconContainer}>
        <Ionicons name="call" size={24} color="tomato" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.iconContainer}>
        <Ionicons name="mail" size={24} color="tomato" />
      </TouchableOpacity>
    </View>
  )
}

const ContactList = () => {
  return (
    <FlatList
      data={contactsData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ContactListItem contact={item} />}
    />
  )
}

const styles = StyleSheet.create({
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  contactInfo: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    fontSize: 20,
    marginBottom: 8,
  },
  iconContainer: {
    marginLeft: 10,
  },
})

export default ContactList
