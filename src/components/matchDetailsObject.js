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

    team1Logo: 'https://clublogos.stadion.io/assets/ClubLogos/Football/642.png',

    team2Logo:
      'https://clublogos.stadion.io/assets/ClubLogos/Football/English/630.png',

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

export const matchDetailsWomen = {
  past: {
    date: `${new Intl.DateTimeFormat('en-GB', options).format(
      inputDateFormat('20/12/2023')
    )}`,

    title: 'uefa women champions league',

    team1Logo:
      'https://img.chelseafc.com/image/upload/v1698240791/logos/team-logos/bk_hacken.png',

    team2Logo:
      'https://clublogos.stadion.io/assets/ClubLogos/Football/English/630.png',

    matchTime: '1 - 3',

    team1: 'Hacken Women',

    team2: 'Chelsea Women',
  },

  present: {
    date: `${new Intl.DateTimeFormat('en-GB', options).format(
      inputDateFormat('14/01/2024')
    )}`,

    title: `women's fa cup`,

    team1Logo:
      'https://clublogos.stadion.io/assets/ClubLogos/Football/English/630.png',

    team2Logo:
      'https://clublogos.stadion.io/assets/ClubLogos/Football/English/735.png',

    matchTime: '13:00',

    team1: 'Chelsea Women',

    team2: 'West Ham United Women',
  },

  future: {
    date: `${new Intl.DateTimeFormat('en-GB', options).format(
      inputDateFormat('21/01/2024')
    )}`,

    title: 'super league',

    team1Logo:
      'https://clublogos.stadion.io/assets/ClubLogos/Football/English/630.png',

    team2Logo:
      'https://clublogos.stadion.io/assets/ClubLogos/Football/English/680.png',

    matchTime: '12:30',

    team1: 'Chelsea Women',

    team2: 'Manchester United Women',
  },
};

export const matchDetailsAcademy = {
  past: {
    date: `${new Intl.DateTimeFormat('en-GB', options).format(
      inputDateFormat('20/12/2023')
    )}`,

    title: 'premier league international cup',

    team1Logo:
      'https://clublogos.stadion.io/assets/ClubLogos/Football/English/630.png',

    team2Logo:
      'https://clublogos.stadion.io/assets/ClubLogos/Football/Scottish/61.svg',

    matchTime: '3 - 1',

    team1: 'Chelsea U21',

    team2: 'Celtic U21',
  },

  present: {
    date: `${new Intl.DateTimeFormat('en-GB', options).format(
      inputDateFormat('09/01/2024')
    )}`,

    title: `premier league international cup`,

    team1Logo:
      'https://clublogos.stadion.io/assets/ClubLogos/Football/English/630.png',

    team2Logo:
      'https://clublogos.stadion.io/assets/ClubLogos/Custom/Valencia.png',

    matchTime: '19:00',

    team1: 'Chelsea U21',

    team2: 'Valencia U21',
  },

  future: {
    date: `${new Intl.DateTimeFormat('en-GB', options).format(
      inputDateFormat('12/01/2024')
    )}`,

    title: 'premier league 2',

    team1Logo:
      'https://clublogos.stadion.io/assets/ClubLogos/Football/English/630.png',

    team2Logo:
      'https://clublogos.stadion.io/assets/ClubLogos/Football/English/680.png',

    matchTime: '12:30',

    team1: 'Chelsea U21',

    team2: 'Manchester United U21',
  },
};
