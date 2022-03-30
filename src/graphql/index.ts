import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type AddItemImageInput = {
  alt?: InputMaybe<Scalars['String']>;
  link: Scalars['String'];
};

export type CommonFilterOptionInput = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sortKey?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<SortOrder>;
};

export type CreateItemInput = {
  code: Scalars['String'];
  currency?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<AddItemImageInput>>;
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type CreateOrderDetailInput = {
  itemCode: Scalars['String'];
  orderId?: InputMaybe<Scalars['Float']>;
  quantity: Scalars['Int'];
  unitPrice: Scalars['Float'];
};

export type CreateUploadInput = {
  mimeType: Scalars['String'];
  purpose: UploadPurpose;
};

export type FilterOrderInput = {
  placedAt?: InputMaybe<Scalars['DateTime']>;
  referenceNumber?: InputMaybe<Scalars['String']>;
};

export type Item = {
  __typename?: 'Item';
  code: Scalars['String'];
  currency: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  images?: Maybe<Array<ItemImage>>;
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type ItemImage = {
  __typename?: 'ItemImage';
  alt?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  item: Item;
  link: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createItem: Item;
  createOrder: Order;
  deleteItems: Scalars['Boolean'];
  generateSignedUrl: SignedUrl;
  updateItem: Item;
  updateOrder: Order;
};


export type MutationCreateItemArgs = {
  input: CreateItemInput;
};


export type MutationCreateOrderArgs = {
  input: PlaceOrderInput;
};


export type MutationDeleteItemsArgs = {
  codes: Array<Scalars['String']>;
};


export type MutationGenerateSignedUrlArgs = {
  input: CreateUploadInput;
};


export type MutationUpdateItemArgs = {
  input: UpdateItemInput;
};


export type MutationUpdateOrderArgs = {
  input: UpdateOrderInput;
};

export type Order = {
  __typename?: 'Order';
  createdAt: Scalars['DateTime'];
  currency: Scalars['String'];
  id: Scalars['String'];
  orderDetails?: Maybe<Array<OrderDetail>>;
  placedAt: Scalars['DateTime'];
  referenceNumber: Scalars['String'];
  status: Scalars['String'];
  totalPrice: Scalars['Float'];
};

export type OrderDetail = {
  __typename?: 'OrderDetail';
  id: Scalars['String'];
  item: Item;
  order: Order;
  quantity: Scalars['Int'];
  unitPrice: Scalars['Float'];
};

export type Orders = {
  __typename?: 'Orders';
  hasMore: Scalars['Boolean'];
  items: Array<Order>;
  page: Scalars['Int'];
  pages: Scalars['Int'];
  total: Scalars['Int'];
};

export type PlaceOrderInput = {
  orders: Array<CreateOrderDetailInput>;
  placedAt?: InputMaybe<Scalars['DateTime']>;
};

export type Price = {
  __typename?: 'Price';
  currency: Scalars['String'];
  price: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  calculateTotalPrice: Price;
  getItems: Array<Item>;
  getNextReferenceNumber: Scalars['String'];
  getOrderById: Order;
  getPaginatedOrders: Orders;
};


export type QueryCalculateTotalPriceArgs = {
  input: PlaceOrderInput;
};


export type QueryGetItemsArgs = {
  searchText?: InputMaybe<Scalars['String']>;
};


export type QueryGetOrderByIdArgs = {
  id: Scalars['String'];
};


export type QueryGetPaginatedOrdersArgs = {
  filter?: InputMaybe<FilterOrderInput>;
  options: CommonFilterOptionInput;
};

export type SignedUrl = {
  __typename?: 'SignedUrl';
  signedUrl?: Maybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type UpdateItemInput = {
  code: Scalars['String'];
  currency?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<AddItemImageInput>>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
};

export type UpdateOrderInput = {
  id: Scalars['String'];
  placedAt?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<Scalars['String']>;
};

export enum UploadPurpose {
  Image = 'IMAGE'
}

export type ItemInfoFragment = { __typename?: 'Item', code: string, name: string, description?: string | null, price: number, currency: string, images?: Array<{ __typename?: 'ItemImage', id: string, link: string, alt?: string | null }> | null };

export type GetItemsQueryVariables = Exact<{
  searchText?: InputMaybe<Scalars['String']>;
}>;


export type GetItemsQuery = { __typename?: 'Query', getItems: Array<{ __typename?: 'Item', code: string, name: string, description?: string | null, price: number, currency: string, images?: Array<{ __typename?: 'ItemImage', id: string, link: string, alt?: string | null }> | null }> };

export type CreateItemMutationVariables = Exact<{
  input: CreateItemInput;
}>;


export type CreateItemMutation = { __typename?: 'Mutation', createItem: { __typename?: 'Item', code: string, name: string, description?: string | null, price: number, currency: string, images?: Array<{ __typename?: 'ItemImage', id: string, link: string, alt?: string | null }> | null } };

export type UpdateItemMutationVariables = Exact<{
  input: UpdateItemInput;
}>;


export type UpdateItemMutation = { __typename?: 'Mutation', updateItem: { __typename?: 'Item', code: string, name: string, description?: string | null, price: number, currency: string, images?: Array<{ __typename?: 'ItemImage', id: string, link: string, alt?: string | null }> | null } };

export type ItemImageInfoFragment = { __typename?: 'ItemImage', id: string, link: string, alt?: string | null };

export type OrderInfoFragment = { __typename?: 'Order', id: string, referenceNumber: string, totalPrice: number, createdAt: any, status: string, placedAt: any, orderDetails?: Array<{ __typename?: 'OrderDetail', id: string, quantity: number, unitPrice: number, item: { __typename?: 'Item', code: string, name: string, description?: string | null, price: number, currency: string, images?: Array<{ __typename?: 'ItemImage', id: string, link: string, alt?: string | null }> | null } }> | null };

export type PaginatedOrderInfoFragment = { __typename?: 'Orders', total: number, hasMore: boolean, page: number, pages: number, items: Array<{ __typename?: 'Order', id: string, referenceNumber: string, totalPrice: number, createdAt: any, status: string, placedAt: any, orderDetails?: Array<{ __typename?: 'OrderDetail', id: string, quantity: number, unitPrice: number, item: { __typename?: 'Item', code: string, name: string, description?: string | null, price: number, currency: string, images?: Array<{ __typename?: 'ItemImage', id: string, link: string, alt?: string | null }> | null } }> | null }> };

export type GetPaginatedOrdersQueryVariables = Exact<{
  options: CommonFilterOptionInput;
  filter?: InputMaybe<FilterOrderInput>;
}>;


export type GetPaginatedOrdersQuery = { __typename?: 'Query', getPaginatedOrders: { __typename?: 'Orders', total: number, hasMore: boolean, page: number, pages: number, items: Array<{ __typename?: 'Order', id: string, referenceNumber: string, totalPrice: number, createdAt: any, status: string, placedAt: any, orderDetails?: Array<{ __typename?: 'OrderDetail', id: string, quantity: number, unitPrice: number, item: { __typename?: 'Item', code: string, name: string, description?: string | null, price: number, currency: string, images?: Array<{ __typename?: 'ItemImage', id: string, link: string, alt?: string | null }> | null } }> | null }> } };

export type GetOrderByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetOrderByIdQuery = { __typename?: 'Query', getOrderById: { __typename?: 'Order', id: string, referenceNumber: string, totalPrice: number, createdAt: any, status: string, placedAt: any, orderDetails?: Array<{ __typename?: 'OrderDetail', id: string, quantity: number, unitPrice: number, item: { __typename?: 'Item', code: string, name: string, description?: string | null, price: number, currency: string, images?: Array<{ __typename?: 'ItemImage', id: string, link: string, alt?: string | null }> | null } }> | null } };

export type CalculateTotalPriceQueryVariables = Exact<{
  input: PlaceOrderInput;
}>;


export type CalculateTotalPriceQuery = { __typename?: 'Query', calculateTotalPrice: { __typename?: 'Price', currency: string, price: number } };

export type GetNextReferenceNumberQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNextReferenceNumberQuery = { __typename?: 'Query', getNextReferenceNumber: string };

export type CreateOrderMutationVariables = Exact<{
  input: PlaceOrderInput;
}>;


export type CreateOrderMutation = { __typename?: 'Mutation', createOrder: { __typename?: 'Order', id: string, referenceNumber: string, totalPrice: number, createdAt: any, status: string, placedAt: any, orderDetails?: Array<{ __typename?: 'OrderDetail', id: string, quantity: number, unitPrice: number, item: { __typename?: 'Item', code: string, name: string, description?: string | null, price: number, currency: string, images?: Array<{ __typename?: 'ItemImage', id: string, link: string, alt?: string | null }> | null } }> | null } };

export type OrderDetailInfoFragment = { __typename?: 'OrderDetail', id: string, quantity: number, unitPrice: number, item: { __typename?: 'Item', code: string, name: string, description?: string | null, price: number, currency: string, images?: Array<{ __typename?: 'ItemImage', id: string, link: string, alt?: string | null }> | null } };

export type SignedUrlInfoFragment = { __typename?: 'SignedUrl', signedUrl?: string | null };

export type GenerateSignedUrlMutationVariables = Exact<{
  input: CreateUploadInput;
}>;


export type GenerateSignedUrlMutation = { __typename?: 'Mutation', generateSignedUrl: { __typename?: 'SignedUrl', signedUrl?: string | null } };

export const ItemImageInfoFragmentDoc = gql`
    fragment ItemImageInfo on ItemImage {
  id
  link
  alt
}
    `;
export const ItemInfoFragmentDoc = gql`
    fragment ItemInfo on Item {
  code
  name
  description
  price
  currency
  images {
    ...ItemImageInfo
  }
}
    ${ItemImageInfoFragmentDoc}`;
export const OrderDetailInfoFragmentDoc = gql`
    fragment OrderDetailInfo on OrderDetail {
  id
  quantity
  unitPrice
  item {
    ...ItemInfo
  }
}
    ${ItemInfoFragmentDoc}`;
export const OrderInfoFragmentDoc = gql`
    fragment OrderInfo on Order {
  id
  referenceNumber
  totalPrice
  createdAt
  status
  placedAt
  orderDetails {
    ...OrderDetailInfo
  }
}
    ${OrderDetailInfoFragmentDoc}`;
export const PaginatedOrderInfoFragmentDoc = gql`
    fragment PaginatedOrderInfo on Orders {
  items {
    ...OrderInfo
  }
  total
  hasMore
  page
  pages
}
    ${OrderInfoFragmentDoc}`;
export const SignedUrlInfoFragmentDoc = gql`
    fragment SignedUrlInfo on SignedUrl {
  signedUrl
}
    `;
export const GetItemsDocument = gql`
    query getItems($searchText: String) {
  getItems(searchText: $searchText) {
    ...ItemInfo
  }
}
    ${ItemInfoFragmentDoc}`;

/**
 * __useGetItemsQuery__
 *
 * To run a query within a React component, call `useGetItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetItemsQuery({
 *   variables: {
 *      searchText: // value for 'searchText'
 *   },
 * });
 */
export function useGetItemsQuery(baseOptions?: Apollo.QueryHookOptions<GetItemsQuery, GetItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetItemsQuery, GetItemsQueryVariables>(GetItemsDocument, options);
      }
export function useGetItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetItemsQuery, GetItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetItemsQuery, GetItemsQueryVariables>(GetItemsDocument, options);
        }
export type GetItemsQueryHookResult = ReturnType<typeof useGetItemsQuery>;
export type GetItemsLazyQueryHookResult = ReturnType<typeof useGetItemsLazyQuery>;
export type GetItemsQueryResult = Apollo.QueryResult<GetItemsQuery, GetItemsQueryVariables>;
export const CreateItemDocument = gql`
    mutation createItem($input: CreateItemInput!) {
  createItem(input: $input) {
    ...ItemInfo
  }
}
    ${ItemInfoFragmentDoc}`;
export type CreateItemMutationFn = Apollo.MutationFunction<CreateItemMutation, CreateItemMutationVariables>;

/**
 * __useCreateItemMutation__
 *
 * To run a mutation, you first call `useCreateItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createItemMutation, { data, loading, error }] = useCreateItemMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateItemMutation(baseOptions?: Apollo.MutationHookOptions<CreateItemMutation, CreateItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateItemMutation, CreateItemMutationVariables>(CreateItemDocument, options);
      }
export type CreateItemMutationHookResult = ReturnType<typeof useCreateItemMutation>;
export type CreateItemMutationResult = Apollo.MutationResult<CreateItemMutation>;
export type CreateItemMutationOptions = Apollo.BaseMutationOptions<CreateItemMutation, CreateItemMutationVariables>;
export const UpdateItemDocument = gql`
    mutation updateItem($input: UpdateItemInput!) {
  updateItem(input: $input) {
    ...ItemInfo
  }
}
    ${ItemInfoFragmentDoc}`;
export type UpdateItemMutationFn = Apollo.MutationFunction<UpdateItemMutation, UpdateItemMutationVariables>;

/**
 * __useUpdateItemMutation__
 *
 * To run a mutation, you first call `useUpdateItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateItemMutation, { data, loading, error }] = useUpdateItemMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateItemMutation(baseOptions?: Apollo.MutationHookOptions<UpdateItemMutation, UpdateItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateItemMutation, UpdateItemMutationVariables>(UpdateItemDocument, options);
      }
export type UpdateItemMutationHookResult = ReturnType<typeof useUpdateItemMutation>;
export type UpdateItemMutationResult = Apollo.MutationResult<UpdateItemMutation>;
export type UpdateItemMutationOptions = Apollo.BaseMutationOptions<UpdateItemMutation, UpdateItemMutationVariables>;
export const GetPaginatedOrdersDocument = gql`
    query getPaginatedOrders($options: CommonFilterOptionInput!, $filter: FilterOrderInput) {
  getPaginatedOrders(options: $options, filter: $filter) {
    ...PaginatedOrderInfo
  }
}
    ${PaginatedOrderInfoFragmentDoc}`;

/**
 * __useGetPaginatedOrdersQuery__
 *
 * To run a query within a React component, call `useGetPaginatedOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedOrdersQuery({
 *   variables: {
 *      options: // value for 'options'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetPaginatedOrdersQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedOrdersQuery, GetPaginatedOrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedOrdersQuery, GetPaginatedOrdersQueryVariables>(GetPaginatedOrdersDocument, options);
      }
export function useGetPaginatedOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedOrdersQuery, GetPaginatedOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedOrdersQuery, GetPaginatedOrdersQueryVariables>(GetPaginatedOrdersDocument, options);
        }
export type GetPaginatedOrdersQueryHookResult = ReturnType<typeof useGetPaginatedOrdersQuery>;
export type GetPaginatedOrdersLazyQueryHookResult = ReturnType<typeof useGetPaginatedOrdersLazyQuery>;
export type GetPaginatedOrdersQueryResult = Apollo.QueryResult<GetPaginatedOrdersQuery, GetPaginatedOrdersQueryVariables>;
export const GetOrderByIdDocument = gql`
    query getOrderById($id: String!) {
  getOrderById(id: $id) {
    ...OrderInfo
  }
}
    ${OrderInfoFragmentDoc}`;

/**
 * __useGetOrderByIdQuery__
 *
 * To run a query within a React component, call `useGetOrderByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrderByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrderByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOrderByIdQuery(baseOptions: Apollo.QueryHookOptions<GetOrderByIdQuery, GetOrderByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrderByIdQuery, GetOrderByIdQueryVariables>(GetOrderByIdDocument, options);
      }
export function useGetOrderByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrderByIdQuery, GetOrderByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrderByIdQuery, GetOrderByIdQueryVariables>(GetOrderByIdDocument, options);
        }
export type GetOrderByIdQueryHookResult = ReturnType<typeof useGetOrderByIdQuery>;
export type GetOrderByIdLazyQueryHookResult = ReturnType<typeof useGetOrderByIdLazyQuery>;
export type GetOrderByIdQueryResult = Apollo.QueryResult<GetOrderByIdQuery, GetOrderByIdQueryVariables>;
export const CalculateTotalPriceDocument = gql`
    query calculateTotalPrice($input: PlaceOrderInput!) {
  calculateTotalPrice(input: $input) {
    currency
    price
  }
}
    `;

/**
 * __useCalculateTotalPriceQuery__
 *
 * To run a query within a React component, call `useCalculateTotalPriceQuery` and pass it any options that fit your needs.
 * When your component renders, `useCalculateTotalPriceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCalculateTotalPriceQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCalculateTotalPriceQuery(baseOptions: Apollo.QueryHookOptions<CalculateTotalPriceQuery, CalculateTotalPriceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CalculateTotalPriceQuery, CalculateTotalPriceQueryVariables>(CalculateTotalPriceDocument, options);
      }
export function useCalculateTotalPriceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CalculateTotalPriceQuery, CalculateTotalPriceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CalculateTotalPriceQuery, CalculateTotalPriceQueryVariables>(CalculateTotalPriceDocument, options);
        }
export type CalculateTotalPriceQueryHookResult = ReturnType<typeof useCalculateTotalPriceQuery>;
export type CalculateTotalPriceLazyQueryHookResult = ReturnType<typeof useCalculateTotalPriceLazyQuery>;
export type CalculateTotalPriceQueryResult = Apollo.QueryResult<CalculateTotalPriceQuery, CalculateTotalPriceQueryVariables>;
export const GetNextReferenceNumberDocument = gql`
    query getNextReferenceNumber {
  getNextReferenceNumber
}
    `;

/**
 * __useGetNextReferenceNumberQuery__
 *
 * To run a query within a React component, call `useGetNextReferenceNumberQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNextReferenceNumberQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNextReferenceNumberQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNextReferenceNumberQuery(baseOptions?: Apollo.QueryHookOptions<GetNextReferenceNumberQuery, GetNextReferenceNumberQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNextReferenceNumberQuery, GetNextReferenceNumberQueryVariables>(GetNextReferenceNumberDocument, options);
      }
export function useGetNextReferenceNumberLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNextReferenceNumberQuery, GetNextReferenceNumberQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNextReferenceNumberQuery, GetNextReferenceNumberQueryVariables>(GetNextReferenceNumberDocument, options);
        }
export type GetNextReferenceNumberQueryHookResult = ReturnType<typeof useGetNextReferenceNumberQuery>;
export type GetNextReferenceNumberLazyQueryHookResult = ReturnType<typeof useGetNextReferenceNumberLazyQuery>;
export type GetNextReferenceNumberQueryResult = Apollo.QueryResult<GetNextReferenceNumberQuery, GetNextReferenceNumberQueryVariables>;
export const CreateOrderDocument = gql`
    mutation createOrder($input: PlaceOrderInput!) {
  createOrder(input: $input) {
    ...OrderInfo
  }
}
    ${OrderInfoFragmentDoc}`;
export type CreateOrderMutationFn = Apollo.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument, options);
      }
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;
export const GenerateSignedUrlDocument = gql`
    mutation generateSignedUrl($input: CreateUploadInput!) {
  generateSignedUrl(input: $input) {
    ...SignedUrlInfo
  }
}
    ${SignedUrlInfoFragmentDoc}`;
export type GenerateSignedUrlMutationFn = Apollo.MutationFunction<GenerateSignedUrlMutation, GenerateSignedUrlMutationVariables>;

/**
 * __useGenerateSignedUrlMutation__
 *
 * To run a mutation, you first call `useGenerateSignedUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateSignedUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateSignedUrlMutation, { data, loading, error }] = useGenerateSignedUrlMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGenerateSignedUrlMutation(baseOptions?: Apollo.MutationHookOptions<GenerateSignedUrlMutation, GenerateSignedUrlMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GenerateSignedUrlMutation, GenerateSignedUrlMutationVariables>(GenerateSignedUrlDocument, options);
      }
export type GenerateSignedUrlMutationHookResult = ReturnType<typeof useGenerateSignedUrlMutation>;
export type GenerateSignedUrlMutationResult = Apollo.MutationResult<GenerateSignedUrlMutation>;
export type GenerateSignedUrlMutationOptions = Apollo.BaseMutationOptions<GenerateSignedUrlMutation, GenerateSignedUrlMutationVariables>;