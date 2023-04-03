import { Card } from "antd";
export const DashboardProductCart = ({ CardTitle, data1, data2, data3 }) => (
	<Card
		title={CardTitle}
		bordered={false}
		style={{
			width: 300,
		}}
	>
		<p  style={{color:"red" ,marginBottom:"10px", fontSize:'40px'}}  >{data1 ? data1 : 0}</p>
		<p>{data2 ? data2 : ""}</p>
		<p>{data3 ? data3 : ""}</p>
	</Card>
);
