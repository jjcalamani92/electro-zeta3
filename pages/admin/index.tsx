import { FC, useContext, useState } from "react";
import { PRODUCTS, PRODUCT_ALL } from '../../src/gql/query';
import { Spinner04, TableProduct, Pagination01, LayoutItemListAdmin, HeadingTable, GridProduct } from "../../components/Components";
import { Layout, LayoutAdmin } from "../../components/Layout";
import { useQuery } from "@apollo/client";
import { GetServerSideProps } from "next";
import { graphQLClientP } from "../../src/graphQLClient";
import { IHomeAppliance } from "../../src/interfaces";
import { UiContext } from "../../src/context";

interface Props {
	homeApplianceAll: IHomeAppliance[]
	homeAppliancesAll: IHomeAppliance[]
}

const PAGE_SIZE = 6;

const AdminPage:FC<Props> = ({homeApplianceAll, homeAppliancesAll}) => {
	const { site, toggleSideSearch, toggleSideCart } = useContext(UiContext)

  const [page, setPage] = useState(0)

	const { loading, error, data, fetchMore } = useQuery(PRODUCT_ALL, {
		variables: { limit: PAGE_SIZE, offset: page*PAGE_SIZE, site: process.env.API_SITE },  
		fetchPolicy: 'network-only',
		onCompleted: () => console.log('called'),
});
	if (loading) return <Spinner04 />;
	return (
		<>
		<Layout
			title={site.title}
			pageDescription={site.description}
			// imageFullUrl={site.logo}
		>
				<HeadingTable title='Productos' href="/admin/products/new"/>
				<TableProduct products={data.homeAppliancesAll} />
				{/* <GridProduct product={data.homeAppliancesAll}/> */}
				<LayoutItemListAdmin products={data.homeAppliancesAll}/>
				<Pagination01 setPage={setPage} page={page} length={data.homeAppliancesAll.length} all={PAGE_SIZE} />
			{/* <LayoutAdmin>
				{/* <Pagination  /> */}
			{/* </LayoutAdmin> */} 
		</Layout>
		</>

	);
};

// export const getServerSideProps:GetServerSideProps = async({query}) => {
// 	const { page, limit }:any = query;
// 	console.log(page, limit)
//   const { homeApplianceAll } = await graphQLClientP.request(PRODUCTS, {site: process.env.API_SITE})
//   const {homeAppliancesAll} = await graphQLClientP.request(PRODUCT_ALL, { limit: Number(limit), offset: Number(page)*Number(limit), site: process.env.API_SITE })
//   // const data = await graphQLClientP.request(PRODUCTS, {site: process.env.API_SITE})
// 	// console.log('data', homeAppliancesAll)
// 	console.log(homeAppliancesAll)
// 	return {
// 		props: {
// 			homeApplianceAll,
// 			homeAppliancesAll
// 		},
// 	};
// }

export default AdminPage;
