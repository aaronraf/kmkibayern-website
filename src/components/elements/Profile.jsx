import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import db from "../../assets/database-pk.json";

const Profile = (index, imgFolderPath) => {
	const folderPath = "../../assets/pk-" + imgFolderPath;
	return (
		<Container>
			{/* {console.log(index)}
			{console.log(db)}
			{console.log(db[index]?.pengurus)} */}
			{db[index]?.pengurus.map((pk, idx) => (
				<Row key={pk.id || idx}>
					<Col>
						<img src={folderPath + "/" + pk.nama} alt={pk.nama} />
					</Col>
					<Col>
						<h3>{pk.nama_lengkap}</h3>
						<h5>{pk.divisi}</h5>
						<p>{pk.profile}</p>
					</Col>
				</Row>
			))}
		</Container>
	);
};

Profile.propTypes = {
	index: PropTypes.number.isRequired,
	imgFolderPath: PropTypes.string.isRequired,
};

export default Profile;
