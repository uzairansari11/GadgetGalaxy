import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ _id, Image1 }) => {
	const navigate = useNavigate();
	const handleEdit = (id) => {
        navigate(`/admin/product/edit/${_id}`);
		console.log(id);
	};
	const handleDelete = (id) => {
		console.log(id);
	};

	return (
		<Card
			style={{
				width: "90%",
			}}
			cover={<img alt="example" src={Image1} />}
			actions={[
				<EditOutlined key="edit" onClick={() => handleEdit(_id)} />,
				<DeleteOutlined key="delete" onClick={() => handleDelete(_id)} />,
			]}
		></Card>
	);
};
