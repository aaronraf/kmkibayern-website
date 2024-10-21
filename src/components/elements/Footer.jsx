import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Fab } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkIcon from "@mui/icons-material/Link";
import { useTranslation } from "react-i18next";

const Footer = () => {
	const { t } = useTranslation();
	const date = new Date().getFullYear();
	return (
		<section className="footer">
			<p>
				Copyright © {date}. {t("kmki-desc")}.
			</p>
			<div className="footer-links">
				<Container fluid>
					<Fab
						size="large"
						color="primary"
						href="https://www.instagram.com/kmkibayern/"
						className="me-4">
						<InstagramIcon />
					</Fab>
					<Fab size="large" color="primary" href="https://linktr.ee/kmkibayern">
						<LinkIcon />
					</Fab>
				</Container>
			</div>
		</section>
	);
};

export default Footer;
