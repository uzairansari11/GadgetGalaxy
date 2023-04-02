import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Text, useToast } from "@chakra-ui/react";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../utils";
import { useDispatch } from "react-redux";
import { getData } from "../../redux/adminproduct/action";

export const ProductCard = ({
	_id,
	Image1,
	Title,
	Category,
	Brand,
	Discount_price,
	Original_price,
	Product_details,
}) => {
	const toast = useToast();
	const dispatch = useDispatch();

	const navigate = useNavigate();
	const handleEdit = (id) => {
		navigate(`/admin/product/edit/${id}`);
		console.log(id);
	};


	const handleDelete = async (id) => {
		try {
			await deleteProduct(id);
			await dispatch(getData());
			toast({
				title: `Product: ${id} Has Been Deleted`,
				status: "success",
				duration: 2000,
				isClosable: true,
				position: "top",
			});
		} catch (error) {
			toast({
				title: `Product: ${id} Can't Been Deleted`,
				status: "error",
				duration: 2000,
				isClosable: true,
				position: "top",
			});
		}
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
		>
			<Text size="sm">Title :{`${Title.substring(0, 10)} ...`}</Text>
			<Text size="sm">Category :{Category}</Text>
			<Text size="sm">Brand :{Brand}</Text>
			<Text size="sm">Original_price :Rs {Original_price} </Text>
			<Text size="sm">Discount Price :Rs {Discount_price}</Text>
			<Text size="sm">
				Product_details :{`${Product_details.substring(0, 35)} ...`}
			</Text>
		</Card>
	);
};
