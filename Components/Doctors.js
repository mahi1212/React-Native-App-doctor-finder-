import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import Doctor from './Doctor'

export default function Doctors() {
    const [doctors, setDoctors] = useState([])
    useEffect(()=>{
        fetch('https://stark-caverns-04377.herokuapp.com/doctors')
        .then(res => res.json())
        .then(data=> setDoctors(data))
    },[])
    return (
        <View>
            <Text>This is Doctors Page </Text>
            {
                doctors.map(doctor => <Doctor 
                doctor={doctor}
                key={doctor.email}></Doctor>)
            }
        </View>
    )
}
