import { gql } from "@apollo/client";

export const PBS = gql`
	query ClothingAll($site: String!) {
		homeApplianceAll(site: $site) {
			slug
		}
	}
`;
export const PRODUCTS = gql`
	query ClothingAll($site: String!) {
		homeApplianceAll(site: $site) {
			_id
			name
			image
			price
			description
			category
			section
			item
			slug
		}
	}
`;

export const CATEGORY = gql`
	query ClothingAll($site: String!) {
		homeApplianceAll(site: $site) {
			category
		}
	}
`;
export const SECTION = gql`
	query ClothingAll($site: String!) {
		homeApplianceAll(site: $site) {
			category
			section
		}
	}
`;
export const ITEM = gql`
	query ClothingAll($site: String!) {
		homeApplianceAll(site: $site) {
			category
			section
			item
		}
	}
`;

// export const CLOTHINGS = gql`
// 	query Clothings {
// 		homeAppliances {
// 			_id
// 			name
// 			brand
// 			description
// 			image
// 			inStock
// 			slug
// 			section
// 			item
// 			category
// 			price
// 			tags
// 			site
// 		}
// 	}
// `;

export const PRODUCTS_BY_ITEM = gql`
	query ClothingByCategoryAndSectionAndItem($category: String!, $section: String!, $item: String!, $site: String!) {
		homeApplianceByCategoryAndSectionAndItem(category: $category, section: $section, item: $item, site: $site) {
			name
			price
			oldPrice
			featured
			image
			slug
		}
	}
`;
export const PRODUCTS_BY_SECTION = gql`
	query ClothingByCategoryAndSectionAndItem($category: String!, $section: String!, $item: String!, $site: String!) {
		homeApplianceByCategoryAndSectionAndItem(category: $category, section: $section, item: $item, site: $site) {
			name
			price
			image
			slug
		}
	}
`;

export const PRODUCT_BY_OFFER = gql`
	query ClothingOffer( $site: String!) {
		homeApplianceOffer(site: $site) {
			_id
			name
			brand
			description
			image
			inStock
			slug
			category
			section
			item
			price
			oldPrice
			tags
			featured

			color
			sizes

		}
	}
`;
export const PRODUCT_BY_PROMOTION = gql`
	query ClothingPromotion( $site: String!) {
		homeAppliancePromotion( site: $site) {
			_id
			name
			brand
			description
			image
			inStock
			slug
			category
			section
			item
			price
			oldPrice
			tags
			featured

			color
			sizes

		}
	}
`;
export const PRODUCT_BY_FEATURED = gql`
	query ClothingByFeatured($featured: String!, $site: String!) {
		homeApplianceByFeatured(featured: $featured, site: $site) {
			_id
			name
			brand
			description
			image
			inStock
			slug
			category
			section
			item
			price
			oldPrice
			tags
			featured

			color
			sizes

		}
	}
`;
export const PRODUCT_BY_SLUG = gql`
	query ClothingBySlug($slug: String!, $site: String!) {
		homeApplianceBySlug(slug: $slug, site: $site) {
			_id
			name
			brand
			description
			image
			inStock
			slug
			category
			section
			item
			price
			oldPrice
			tags

			featured
			color
			sizes

		}
	}
`;


export const PRODUCT_ALL = gql`
	query ClothingsAll($limit: Float!, $offset:Float!, $site: String!) {
		homeAppliancesAll(input:  { limit: $limit, offset: $offset}, site:$site ) {
			_id
			name
			brand
			description
			image
			inStock
			slug
			category
			section
			item
			price
			tags

			featured
			color
			sizes
		}

}
`
