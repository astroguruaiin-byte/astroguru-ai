const API_KEY = "cwWdkRE9HKax0g3vyzwzu1DuxmSCKbbM1BOvFfHp";
window.onload = function () {

    // Date Dropdown
    for(let i = 1; i <= 31; i++){
        document.getElementById("day").innerHTML +=
        `<option value="${i}">${i}</option>`;
    }

    // Year Dropdown
    for(let i = 2025; i >= 1950; i--){
        document.getElementById("year").innerHTML +=
        `<option value="${i}">${i}</option>`;
    }

}
async function generatePrediction() {

    let name = document.getElementById("name").value;
    let birthTime = document.getElementById("birthTime").value;
    let birthPlace = document.getElementById("birthPlace").value;

    let day = parseInt(document.getElementById("day").value);
    let month = document.getElementById("month").value;
    let year = parseInt(document.getElementById("year").value);

    if (!name || !day || !month || !year || !birthTime || !birthPlace) {
        alert("Please fill all details");
        return;
    }

    let timeParts = birthTime.split(":");
    let hours = parseInt(timeParts[0]);
    let minutes = parseInt(timeParts[1]);

    let latitude = 21.47;
    let longitude = 83.97;

    const monthNumber = {
        January:1,
        February:2,
        March:3,
        April:4,
        May:5,
        June:6,
        July:7,
        August:8,
        September:9,
        October:10,
        November:11,
        December:12
    };

    const rashiNames = {
        1: "Aries ♈",
        2: "Taurus ♉",
        3: "Gemini ♊",
        4: "Cancer ♋",
        5: "Leo ♌",
        6: "Virgo ♍",
        7: "Libra ♎",
        8: "Scorpio ♏",
        9: "Sagittarius ♐",
        10: "Capricorn ♑",
        11: "Aquarius ♒",
        12: "Pisces ♓"
    };

    try {

        const response = await fetch(
            "https://json.freeastrologyapi.com/planets",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": API_KEY
                },
                body: JSON.stringify({
                    year: year,
                    month: monthNumber[month],
                    date: day,
                    hours: hours,
                    minutes: minutes,
                    seconds: 0,
                    latitude: latitude,
                    longitude: longitude,
                    timezone: 5.5,
                    settings: {
                        observation_point: "topocentric",
                        ayanamsha: "lahiri"
                    }
                })
            }
        );

        const data = await response.json();

        let moon = data.output?.[1]?.Moon?.current_sign;
        let ascendant = data.output?.[1]?.Ascendant?.current_sign;

        let rashi = rashiNames[moon] || "Unknown";
        let lagna = rashiNames[ascendant] || "Unknown";

        document.getElementById("result").innerHTML = `
            <h2>🙏 Namaste ${name}</h2>

            <p>🎂 DOB: ${day} ${month} ${year}</p>
            <p>🕒 Birth Time: ${birthTime}</p>
            <p>📍 Birth Place: ${birthPlace}</p>

            <p>🌙 Rashi: ${rashi}</p>
            <p>⬆️ Lagna: ${lagna}</p>
            <p>⭐ Nakshatra: Coming Soon</p>

            <p>💼 Career Score: ${Math.floor(Math.random()*21)+80}/100</p>
            <p>❤️ Love Score: ${Math.floor(Math.random()*21)+75}/100</p>
            <p>💰 Finance Score: ${Math.floor(Math.random()*21)+70}/100</p>
        `;

    } catch (error) {
        console.log(error);
        alert("API Error. Check internet or API key.");
    }
}