const conditions_list = [
    {
        bg: 'bg-slate-50',
        code: 1000,
        day: 'Sunny',
        icon: 113,
        night: 'Clear',
    },
    {
        code: 1003,
        day: 'Partly cloudy',
        icon: 116,
        night: 'Partly cloudy',
    },
    {
        code: 1006,
        day: 'Cloudy',
        icon: 119,
        night: 'Cloudy',
    },
    {
        code: 1009,
        day: 'Overcast',
        icon: 122,
        night: 'Overcast',
    },
    {
        code: 1030,
        day: 'Mist',
        icon: 143,
        night: 'Mist',
    },
    {
        code: 1063,
        day: 'Patchy rain possible',
        icon: 176,
        night: 'Patchy rain possible',
    },
    {
        code: 1066,
        day: 'Patchy snow possible',
        icon: 179,
        night: 'Patchy snow possible',
    },
    {
        code: 1069,
        day: 'Patchy sleet possible',
        icon: 182,
        night: 'Patchy sleet possible',
    },
    {
        code: 1072,
        day: 'Patchy freezing drizzle possible',
        icon: 185,
        night: 'Patchy freezing drizzle possible',
    },
    {
        code: 1087,
        day: 'Thundery outbreaks possible',
        icon: 200,
        night: 'Thundery outbreaks possible',
    },
    {
        code: 1114,
        day: 'Blowing snow',
        icon: 227,
        night: 'Blowing snow',
    },
    {
        code: 1117,
        day: 'Blizzard',
        icon: 230,
        night: 'Blizzard',
    },
    {
        code: 1135,
        day: 'Fog',
        icon: 248,
        night: 'Fog',
    },
    {
        code: 1147,
        day: 'Freezing fog',
        icon: 260,
        night: 'Freezing fog',
    },
    {
        code: 1150,
        day: 'Patchy light drizzle',
        icon: 263,
        night: 'Patchy light drizzle',
    },
    {
        code: 1153,
        day: 'Light drizzle',
        icon: 266,
        night: 'Light drizzle',
    },
    {
        code: 1168,
        day: 'Freezing drizzle',
        icon: 281,
        night: 'Freezing drizzle',
    },
    {
        code: 1171,
        day: 'Heavy freezing drizzle',
        icon: 284,
        night: 'Heavy freezing drizzle',
    },
    {
        code: 1180,
        day: 'Patchy light rain',
        icon: 293,
        night: 'Patchy light rain',
    },
    {
        code: 1183,
        day: 'Light rain',
        icon: 296,
        night: 'Light rain',
    },
    {
        code: 1186,
        day: 'Moderate rain at times',
        icon: 299,
        night: 'Moderate rain at times',
    },
    {
        code: 1189,
        day: 'Moderate rain',
        icon: 302,
        night: 'Moderate rain',
    },
    {
        code: 1192,
        day: 'Heavy rain at times',
        icon: 305,
        night: 'Heavy rain at times',
    },
    {
        code: 1195,
        day: 'Heavy rain',
        icon: 308,
        night: 'Heavy rain',
    },
    {
        code: 1198,
        day: 'Light freezing rain',
        icon: 311,
        night: 'Light freezing rain',
    },
    {
        code: 1201,
        day: 'Moderate or heavy freezing rain',
        icon: 314,
        night: 'Moderate or heavy freezing rain',
    },
    {
        code: 1204,
        day: 'Light sleet',
        icon: 317,
        night: 'Light sleet',
    },
    {
        code: 1207,
        day: 'Moderate or heavy sleet',
        icon: 320,
        night: 'Moderate or heavy sleet',
    },
    {
        code: 1210,
        day: 'Patchy light snow',
        icon: 323,
        night: 'Patchy light snow',
    },
    {
        code: 1213,
        day: 'Light snow',
        icon: 326,
        night: 'Light snow',
    },
    {
        code: 1216,
        day: 'Patchy moderate snow',
        icon: 329,
        night: 'Patchy moderate snow',
    },
    {
        code: 1219,
        day: 'Moderate snow',
        icon: 332,
        night: 'Moderate snow',
    },
    {
        code: 1222,
        day: 'Patchy heavy snow',
        icon: 335,
        night: 'Patchy heavy snow',
    },
    {
        code: 1225,
        day: 'Heavy snow',
        icon: 338,
        night: 'Heavy snow',
    },
    {
        code: 1237,
        day: 'Ice pellets',
        icon: 350,
        night: 'Ice pellets',
    },
    {
        code: 1240,
        day: 'Light rain shower',
        icon: 353,
        night: 'Light rain shower',
    },
    {
        code: 1243,
        day: 'Moderate or heavy rain shower',
        icon: 356,
        night: 'Moderate or heavy rain shower',
    },
    {
        code: 1246,
        day: 'Torrential rain shower',
        icon: 359,
        night: 'Torrential rain shower',
    },
    {
        code: 1249,
        day: 'Light sleet showers',
        icon: 362,
        night: 'Light sleet showers',
    },
    {
        code: 1252,
        day: 'Moderate or heavy sleet showers',
        icon: 365,
        night: 'Moderate or heavy sleet showers',
    },
    {
        code: 1255,
        day: 'Light snow showers',
        icon: 368,
        night: 'Light snow showers',
    },
    {
        code: 1258,
        day: 'Moderate or heavy snow showers',
        icon: 371,
        night: 'Moderate or heavy snow showers',
    },
    {
        code: 1261,
        day: 'Light showers of ice pellets',
        icon: 374,
        night: 'Light showers of ice pellets',
    },
    {
        code: 1264,
        day: 'Moderate or heavy showers of ice pellets',
        icon: 377,
        night: 'Moderate or heavy showers of ice pellets',
    },
    {
        code: 1273,
        day: 'Patchy light rain with thunder',
        icon: 386,
        night: 'Patchy light rain with thunder',
    },
    {
        code: 1276,
        day: 'Moderate or heavy rain with thunder',
        icon: 389,
        night: 'Moderate or heavy rain with thunder',
    },
    {
        code: 1279,
        day: 'Patchy light snow with thunder',
        icon: 392,
        night: 'Patchy light snow with thunder',
    },
    {
        code: 1282,
        day: 'Moderate or heavy snow with thunder',
        icon: 395,
        night: 'Moderate or heavy snow with thunder',
    },
];

export const conditions = conditions_list.map(condition => {
    let bgClass;
    if (condition.code >= 1000 && condition.code < 1063) {
        // Clear to Patchy rain possible: Use teal background
        bgClass = 'bg-teal-50';
    } else if (condition.code >= 1063 && condition.code < 1135) {
        // Patchy rain possible to Fog: Use gray background
        bgClass = 'bg-gray-50';
    } else if (condition.code >= 1135 && condition.code < 1180) {
        // Fog to Patchy light rain: Use blue background
        bgClass = 'bg-blue-50';
    } else if (condition.code >= 1180 && condition.code < 1237) {
        // Patchy light rain to Ice pellets: Use indigo background
        bgClass = 'bg-indigo-50';
    } else if (condition.code >= 1237 && condition.code < 1273) {
        // Ice pellets to Patchy light rain with thunder: Use purple background
        bgClass = 'bg-purple-50';
    } else {
        // Rest of the conditions: Use pink background
        bgClass = 'bg-pink-50';
    }

    return {
        ...condition,
        bg: bgClass,
    };
});
