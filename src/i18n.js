import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import id from "./assets/locales/id.json";
import en from "./assets/locales/en.json";
import de from "./assets/locales/de.json";

i18n.use(initReactI18next).init({
	resources: {
		id: {
			translation: id,
		},
		en: {
			translation: en,
		},
		fr: {
			translation: de,
		},
	},
	lng: "id",  // default language
	fallbackLng: "en",  // fallback language if translation is missing
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
