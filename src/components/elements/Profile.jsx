import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import db from "../../assets/data/database-pk.json";
import DynamicImage from "./DynamicImage";

const Profile = ({ index, periode }) => {
  const folderPath = `../../assets/images/pk-${periode}`;
  
  return (
    <Container>
      {/* {console.log(index)}
       {console.log(db)}
       {console.log(db[index]?.pengurus)} */}
      {db[index]?.pengurus.map((pk, idx) => (
        <Row key={pk.nama || idx} className="mb-4">
          <Col md={4}>
            <DynamicImage 
              folderPath={folderPath}
              imageName={pk.nama}
              alt={pk.nama}
              className="img-fluid"
            />
          </Col>
          <Col md={8}>
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
  periode: PropTypes.string.isRequired,
};

export default Profile;