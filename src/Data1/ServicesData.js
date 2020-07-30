import React from 'react';
import { FaVenusMars, FaSpa } from 'react-icons/fa';
import { GiWaveSurfer, GiScubaTanks } from "react-icons/gi";

// CHANGE THESE DATAS AND ADD SOME MORE!!
const ServicesData = [
    {
        icon: <GiWaveSurfer />,
        title: "Surfing",
        info: "A short boat ride from Beach resort by Jade, and you’re there: one of the prime surf spots on the planet. In the North Malé Atoll, our experienced instructors cater to students of all skill levels."
    },
    {
        icon: <FaVenusMars/>,
        title: "Weddings",
        info: "Beach resort by Jade provides the perfect setting, be it your dream wedding or your anniversary. Step into the elegant ambience of a bygone era and celebrate the most momentous occasions of your life."
        // , just the way you imagine it to be."  for every romantic occasion, from
    },
    {
        icon: <FaSpa />,
        title: "Spa",
        info: "Set in the lush gardens, Veli Spa is a true Maldivian experience. Our Spa is inspired by the solace of the Maldives Islands, the balance of the oceans and the energy of the indigenous people of the Maldives."
        //  and the healing effects of human touch while incorporating modern therapies."
    },
    {
        icon: <GiScubaTanks/>,
        title: "scuba diving",
        info: "One of the premier snorkelling and diving resorts in the Maldives. Expertly-led courses and tours by world-renowned diving company, Euro Divers. Many of the best dive sites within a 5-30 minute boat trip from the resort."
    }
];

export default ServicesData;

// GiWaveSurfer //surfing
// FaVenusMars //weddings
// FaSpa //spa
// GiScubaTanks //scuba diving

