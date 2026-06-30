// ======================
// AstroGuru AI Script
// ======================

// API Key
const API_KEY = "YOUR_API_KEY_HERE";

// Fill Date Dropdown
for(let i = 1; i <= 31; i++){
    document.getElementById("day").innerHTML +=
    `<option value="${i}">${i}</option>`;
}

// Fill Year Dropdown
for(let i = 2026; i >= 1950; i--){
    document.getElementById("year").innerHTML +=
    `<option value="${i}">${i}</option>`;
}

function generatePrediction(){

    let name = document.getElementById("name").value;
    let birthTime = document.getElementById("birthTime").value || "Not Provided";
    let birthPlace = document.getElementById("birthPlace").value || "Not Provided";

    let day = parseInt(document.getElementById("day").value);
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;

    if(name == "" || !day || month == "" || year == ""){
        alert("Please fill all details");
        return;
    }

    let zodiac = "";
    let color = "";
    let number = "";
    let luckyDay = "";
    let career = "";
    let love = "";
    let horoscope = "";

    // Zodiac Calculation
    if((month=="March" && day>=21) || (month=="April" && day<=19)){
        zodiac="Aries ♈";
        color="Red ❤️";
        number="9";
        luckyDay="Tuesday";
    }
    else if((month=="April" && day>=20) || (month=="May" && day<=20)){
        zodiac="Taurus ♉";
        color="Green 💚";
        number="6";
        luckyDay="Friday";
    }
    else if((month=="May" && day>=21) || (month=="June" && day<=20)){
        zodiac="Gemini ♊";
        color="Yellow 💛";
        number="5";
        luckyDay="Wednesday";
    }
    else if((month=="June" && day>=21) || (month=="July" && day<=22)){
        zodiac="Cancer ♋";
        color="White 🤍";
        number="2";
        luckyDay="Monday";
    }
    else if((month=="July" && day>=23) || (month=="August" && day<=22)){
        zodiac="Leo ♌";
        color="Gold 💛";
        number="1";
        luckyDay="Sunday";
    }
    else if((month=="August" && day>=23) || (month=="September" && day<=22)){
        zodiac="Virgo ♍";
        color="Green 💚";
        number="5";
        luckyDay="Wednesday";
    }
    else if((month=="September" && day>=23) || (month=="October" && day<=22)){
        zodiac="Libra ♎";
        color="Pink 💖";
        number="6";
        luckyDay="Friday";
    }
    else if((month=="October" && day>=23) || (month=="November" && day<=21)){
        zodiac="Scorpio ♏";
        color="Black 🖤";
        number="8";
        luckyDay="Tuesday";
    }
    else if((month=="November" && day>=22) || (month=="December" && day<=21)){
        zodiac="Sagittarius ♐";
        color="Purple 💜";
        number="3";
        luckyDay="Thursday";
    }
    else if((month=="December" && day>=22) || (month=="January" && day<=19)){
        zodiac="Capricorn ♑";
        color="Brown 🤎";
        number="8";
        luckyDay="Saturday";
    }
    else if((month=="January" && day>=20) || (month=="February" && day<=18)){
        zodiac="Aquarius ♒";
        color="Blue 💙";
        number="4";
        luckyDay="Saturday";
    }
    else{
        zodiac="Pisces ♓";
        color="Sea Green 💚";
        number="7";
        luckyDay="Thursday";
    }

    // Temporary predictions
    career = "Success opportunities are increasing.";
    love = "Communication will strengthen relationships.";
    horoscope = "Positive energy surrounds your journey ahead.";

    document.getElementById("result").innerHTML = `
        <h2>🙏 Namaste ${name}</h2>

        <p>🎂 DOB: ${day} ${month} ${year}</p>

        <p>🕒 Birth Time: ${birthTime}</p>

        <p>📍 Birth Place: ${birthPlace}</p>

        <p>🔮 Zodiac: ${zodiac}</p>

        <p>💜 Lucky Color: ${color}</p>

        <p>🔢 Lucky Number: ${number}</p>

        <p>🍀 Lucky Day: ${luckyDay}</p>

        <p>💼 Career: ${career}</p>

        <p>❤️ Love: ${love}</p>

        <p>🌟 Horoscope: ${horoscope}</p>
    `;
}