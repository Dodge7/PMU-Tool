
//Each game has several units. 
//Each unit has a name, a default tier list position, a default point value, and availability
//Availability is either Banned, Guaranteed, Taken or Available


const birthrightUnits = {
    'Corrin': {'Points': 0, 'Tier': 'F', 'Availability': 'Guaranteed'},
    'Felicia': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Jakob': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Azura': {'Points': 0, 'Tier': 'F', 'Availability': 'Guaranteed'},
    'Kaze': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Silas': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Shura': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Izana': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Mozu': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Rinkah': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Sakura': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Hana': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Subaki': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Saizo': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Orochi': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Hinoka': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Azama': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Setsuna': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Hayato': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Oboro': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Hinata': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Takumi': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Kagero': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Reina': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Kaden': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Ryoma': {'Points': 0, 'Tier': 'F', 'Availability': 'Banned'},
    'Scarlet': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Yukimura': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Kana': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Shigure': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Dwyer': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Sophie': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Midori': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Shiro': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Kiragi': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Asugi': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Selkie': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Hisame': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Mitama': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Caeldori': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Rhajat': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'}
}

const conquestUnits = {
    'Corrin': {'Points': 0, 'Tier': 'F', 'Availability': 'Guaranteed'},
    'Felicia': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Jakob': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Azura': {'Points': 0, 'Tier': 'F', 'Availability': 'Guaranteed'},
    'Kaze': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Silas': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Shura': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Izana': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Mozu': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Gunter': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Elise': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Arthur': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Effie': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Odin': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Niles': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Nyx': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Camilla': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Selena': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Beruka': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Laslow': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Peri': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Benny': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Charlotte': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Leo': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Keaton': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Xander': {'Points': 0, 'Tier': 'F', 'Availability': 'Banned'},
    'Flora': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Kana': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Shigure': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Dwyer': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Sophie': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Midori': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Siegbert': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Forrest': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Ignatius': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Velouria': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Percy': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Ophelia': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Soleil': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Nina': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'}
}

const revelationsUnits = {
    'Corrin': {'Points': 0, 'Tier': 'F', 'Availability': 'Guaranteed'},
    'Felicia': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Jakob': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Azura': {'Points': 0, 'Tier': 'F', 'Availability': 'Guaranteed'},
    'Kaze': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Silas': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Shura': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Izana': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Mozu': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Rinkah': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Sakura': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Hana': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Subaki': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Saizo': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Orochi': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Hinoka': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Azama': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Setsuna': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Hayato': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Oboro': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Hinata': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Takumi': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Kagero': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Reina': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Kaden': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Ryoma': {'Points': 0, 'Tier': 'F', 'Availability': 'Banned'},
    'Scarlet': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Fuga': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Gunter': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Elise': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Arthur': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Effie': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Odin': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Niles': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Nyx': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Camilla': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Selena': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Beruka': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Laslow': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Peri': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Benny': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Charlotte': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Leo': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Keaton': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Xander': {'Points': 0, 'Tier': 'F', 'Availability': 'Banned'},
    'Flora': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Kana': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Shigure': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Dwyer': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Sophie': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Midori': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Shiro': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Kiragi': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Asugi': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Selkie': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Hisame': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Mitama': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Caeldori': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Rhajat': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Siegbert': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Forrest': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Ignatius': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Velouria': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Percy': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Ophelia': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Soleil': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'},
    'Nina': {'Points': 0, 'Tier': 'F', 'Availability': 'Available'}
}