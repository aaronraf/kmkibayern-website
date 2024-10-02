/* eslint-disable react/prop-types */
function displayLanguage(lang) {
	switch (lang) {
		case "en":
			return "Indonesian Catholic Student Family in Bavaria";

		case "de":
			return "Indonesischer Katolischer Studentengemeinde in Bayern";

		default:
			return "Keluarga Mahasiswa Katolik Indonesia di Bayern";
	}
}

export default function Hero(props) {
	return (
		<div className="hero">
            <img src="./assets/kmkibayern-logo-whitebg.png" alt="kmkibayern-logo" />
			<h1>KMKI Bayern</h1>
			<p>{displayLanguage(props.lang)}</p>
		</div>
	);
}

