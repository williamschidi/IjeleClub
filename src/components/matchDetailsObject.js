function inputDateFormat(date) {
  const [day, month, year] = date.split('/');
  const formattedDate = `${month}/${day}/${year}`;
  const matchDate = new Date(formattedDate);
  return matchDate;
}
const options = {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

export const matchDetailsMen = {
  past: {
    date: `${new Intl.DateTimeFormat('en-GB', options).format(
      inputDateFormat('24/12/2023')
    )}`,

    title: 'premier league',

    team1Logo:
      'https://clublogos.stadion.io/assets/ClubLogos/Football/English/740.png',

    team2Logo:
      'https://clublogos.stadion.io/assets/ClubLogos/Football/English/630.png',

    matchTime: '2 - 1',

    team1: 'Wolves',

    team2: 'Chelsea',
  },

  present: {
    date: `${new Intl.DateTimeFormat('en-GB', options).format(
      inputDateFormat('27/12/2023')
    )}`,

    title: 'premier league',

    team1Logo:
      'https://clublogos.stadion.io/assets/ClubLogos/Football/English/LutonTownFC.png',

    team2Logo: 'https://clublogos.stadion.io/assets/ClubLogos/Football/642.png',

    matchTime: '19:30',

    team1: 'Crystal Palace',

    team2: 'Chelsea',
  },

  future: {
    date: `${new Intl.DateTimeFormat('en-GB', options).format(
      inputDateFormat('30/12/2023')
    )}`,

    title: 'premier league',

    team1Logo:
      'https://clublogos.stadion.io/assets/ClubLogos/Football/English/LutonTownFC.png',

    team2Logo:
      'https://clublogos.stadion.io/assets/ClubLogos/Football/English/630.png',

    matchTime: '12:30',

    team1: 'Luton',

    team2: 'Chelsea',
  },
};
