import React from 'react';
import {View, FlatList } from 'react-native';
import Contact from '../components/Contact';



export default function ContactsScreen() {
    const contacts = [
        {name:"Francis Jah",number:"+2488522180"},
        {name:"Grace Odonko",number:"+2488512180"},
        {name:"Prince William",number:"+2488524180"},
        {name:"Rama Boku",number:"+2488352180"},
        {name:"Alex Manuu",number:"+2488552180"},
        {name:"Malik",number:"+2489852180"},
        {name:"Tom",number:"0244852180"},
        {name:"Mambu",number:"02448052181"},
        {name:"Francess Addo",number:"+24228852180"},
        {name:"Graceland",number:"+2488452180"},
    ]
    return(
        <View>
           <FlatList 
                data={contacts}
                renderItem={({item})=>{
                    return<Contact 
                        image={item.image}
                        name={item.name}
                        phone={item.number}
                    />
                }}
                keyExtractor={(item)=>item.number}
            />
        </View>
    )
}