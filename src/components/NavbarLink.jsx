/* eslint-disable react/prop-types */
import Col from "react-bootstrap/Col";

function NavbarLink(props) {
	function putImage(src, alt) {
		return (
			<div className="logo-container">
				<a href="#">
					<img className="logo-image" src={src} alt={alt} />
				</a>
			</div>
		);
	}

	function putListItem(link, text) {
		return (
			<ul>
				<li>
					<a href={link}>{text}</a>
				</li>
			</ul>
		);
	}

	function readerContent(imgSrc, imgAlt, link, text) {
		if (imgSrc) {
			return putImage(imgSrc, imgAlt);
		} else {
			return putListItem(link, text);
		}
	}

	return <Col>{readerContent(props.imgSrc, props.imgAlt, props.link, props.text)}</Col>;
}

export default NavbarLink;