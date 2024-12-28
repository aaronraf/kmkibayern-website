import React from "react";
import { useTranslation } from "react-i18next";

const Section = ({ title, alignment, background }) => {
	const { t } = useTranslation();
	const alignmentStyle = {
		textAlign: alignment,
        backgroundColor: `var(${background})`, 
	};

	return (
		<section style={alignmentStyle}>
			<h2 className="secondary-header">{t(title)}</h2>
			<div></div>
		</section>
	);
};

export default Section;
