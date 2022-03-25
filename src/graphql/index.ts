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

export type CommonFilterOptionInput = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sortKey?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<SortOrder>;
};

export type CreateItemInput = {
  code: Scalars['String'];
  currency?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type CreateOrderDetailInput = {
  itemCode: Scalars['String'];
  orderId?: InputMaybe<Scalars['Float']>;
  quantity: Scalars['Int'];
};

export type FilterOrderInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type Item = {
  __typename?: 'Item';
  code: Scalars['String'];
  currency: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createItem: Item;
  createOrder: Order;
  deleteItems: Scalars['Boolean'];
  updateItem: Item;
};


export type MutationCreateItemArgs = {
  input: CreateItemInput;
};


export type MutationCreateOrderArgs = {
  input: Array<CreateOrderDetailInput>;
};


export type MutationDeleteItemsArgs = {
  codes: Array<Scalars['String']>;
};


export type MutationUpdateItemArgs = {
  input: UpdateItemInput;
};

export type Order = {
  __typename?: 'Order';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  orderDetails?: Maybe<Array<OrderDetail>>;
  totalPrice: Scalars['Float'];
};

export type OrderDetail = {
  __typename?: 'OrderDetail';
  id: Scalars['String'];
  item: Item;
  order: Order;
  quantity: Scalars['Int'];
};

export type Orders = {
  __typename?: 'Orders';
  hasMore: Scalars['Boolean'];
  items: Array<Order>;
  page: Scalars['Int'];
  pages: Scalars['Int'];
  total: Scalars['Int'];
};

export type Price = {
  __typename?: 'Price';
  currency: Scalars['String'];
  price: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  calculateTotalPrice: Price;
  getItemByCode: Item;
  getItems: Array<Item>;
  getOrderById: Order;
  getOrders: Array<Order>;
  getPaginatedOrders: Orders;
};


export type QueryCalculateTotalPriceArgs = {
  input: Array<CreateOrderDetailInput>;
};


export type QueryGetItemByCodeArgs = {
  code: Scalars['String'];
};


export type QueryGetOrderByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetOrdersArgs = {
  filter?: InputMaybe<FilterOrderInput>;
};


export type QueryGetPaginatedOrdersArgs = {
  filter?: InputMaybe<FilterOrderInput>;
  options: CommonFilterOptionInput;
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type UpdateItemInput = {
  code: Scalars['String'];
  currency?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
};

export type ItemInfoFragment = { __typename?: 'Item', code: string, name: string, price: number, currency: string };

export type GetItemByCodeQueryVariables = Exact<{
  code: Scalars['String'];
}>;


export type GetItemByCodeQuery = { __typename?: 'Query', getItemByCode: { __typename?: 'Item', code: string, name: string, price: number, currency: string } };

export type GetItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetItemsQuery = { __typename?: 'Query', getItems: Array<{ __typename?: 'Item', code: string, name: string, price: number, currency: string }> };

export type CreateItemMutationVariables = Exact<{
  input: CreateItemInput;
}>;


export type CreateItemMutation = { __typename?: 'Mutation', createItem: { __typename?: 'Item', code: string, name: string, price: number, currency: string } };

export type UpdateItemMutationVariables = Exact<{
  input: UpdateItemInput;
}>;


export type UpdateItemMutation = { __typename?: 'Mutation', updateItem: { __typename?: 'Item', code: string, name: string, price: number, currency: string } };

export type OrderInfoFragment = { __typename?: 'Order', id: number, totalPrice: number, createdAt: any, orderDetails?: Array<{ __typename?: 'OrderDetail', id: string, quantity: number, item: { __typename?: 'Item', code: string, name: string, price: number, currency: string } }> | null };

export type PaginatedOrderInfoFragment = { __typename?: 'Orders', total: number, hasMore: boolean, page: number, pages: number, items: Array<{ __typename?: 'Order', id: number, totalPrice: number, createdAt: any, orderDetails?: Array<{ __typename?: 'OrderDetail', id: string, quantity: number, item: { __typename?: 'Item', code: string, name: string, price: number, currency: string } }> | null }> };

export type GetOrdersQueryVariables = Exact<{
  filter?: InputMaybe<FilterOrderInput>;
}>;


export type GetOrdersQuery = { __typename?: 'Query', getOrders: Array<{ __typename?: 'Order', id: number, totalPrice: number, createdAt: any, orderDetails?: Array<{ __typename?: 'OrderDetail', id: string, quantity: number, item: { __typename?: 'Item', code: string, name: string, price: number, currency: string } }> | null }> };

export type GetPaginatedOrdersQueryVariables = Exact<{
  options: CommonFilterOptionInput;
  filter?: InputMaybe<FilterOrderInput>;
}>;


export type GetPaginatedOrdersQuery = { __typename?: 'Query', getPaginatedOrders: { __typename?: 'Orders', total: number, hasMore: boolean, page: number, pages: number, items: Array<{ __typename?: 'Order', id: number, totalPrice: number, createdAt: any, orderDetails?: Array<{ __typename?: 'OrderDetail', id: string, quantity: number, item: { __typename?: 'Item', code: string, name: string, price: number, currency: string } }> | null }> } };

export type GetOrderByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetOrderByIdQuery = { __typename?: 'Query', getOrderById: { __typename?: 'Order', id: number, totalPrice: number, createdAt: any, orderDetails?: Array<{ __typename?: 'OrderDetail', id: string, quantity: number, item: { __typename?: 'Item', code: string, name: string, price: number, currency: string } }> | null } };

export type CalculateTotalPriceQueryVariables = Exact<{
  input: Array<CreateOrderDetailInput> | CreateOrderDetailInput;
}>;


export type CalculateTotalPriceQuery = { __typename?: 'Query', calculateTotalPrice: { __typename?: 'Price', currency: string, price: number } };

export type CreateOrderMutationVariables = Exact<{
  input: Array<CreateOrderDetailInput> | CreateOrderDetailInput;
}>;


export type CreateOrderMutation = { __typename?: 'Mutation', createOrder: { __typename?: 'Order', id: number, totalPrice: number, createdAt: any, orderDetails?: Array<{ __typename?: 'OrderDetail', id: string, quantity: number, item: { __typename?: 'Item', code: string, name: string, price: number, currency: string } }> | null } };

export type OrderDetailInfoFragment = { __typename?: 'OrderDetail', id: string, quantity: number, item: { __typename?: 'Item', code: string, name: string, price: number, currency: string } };

export const ItemInfoFragmentDoc = gql`
    fragment ItemInfo on Item {
  code
  name
  price
  currency
}
    `;
export const OrderDetailInfoFragmentDoc = gql`
    fragment OrderDetailInfo on OrderDetail {
  id
  quantity
  item {
    ...ItemInfo
  }
}
    ${ItemInfoFragmentDoc}`;
export const OrderInfoFragmentDoc = gql`
    fragment OrderInfo on Order {
  id
  totalPrice
  createdAt
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
export const GetItemByCodeDocument = gql`
    query getItemByCode($code: String!) {
  getItemByCode(code: $code) {
    ...ItemInfo
  }
}
    ${ItemInfoFragmentDoc}`;

/**
 * __useGetItemByCodeQuery__
 *
 * To run a query within a React component, call `useGetItemByCodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetItemByCodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetItemByCodeQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useGetItemByCodeQuery(baseOptions: Apollo.QueryHookOptions<GetItemByCodeQuery, GetItemByCodeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetItemByCodeQuery, GetItemByCodeQueryVariables>(GetItemByCodeDocument, options);
      }
export function useGetItemByCodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetItemByCodeQuery, GetItemByCodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetItemByCodeQuery, GetItemByCodeQueryVariables>(GetItemByCodeDocument, options);
        }
export type GetItemByCodeQueryHookResult = ReturnType<typeof useGetItemByCodeQuery>;
export type GetItemByCodeLazyQueryHookResult = ReturnType<typeof useGetItemByCodeLazyQuery>;
export type GetItemByCodeQueryResult = Apollo.QueryResult<GetItemByCodeQuery, GetItemByCodeQueryVariables>;
export const GetItemsDocument = gql`
    query getItems {
  getItems {
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
export const GetOrdersDocument = gql`
    query getOrders($filter: FilterOrderInput) {
  getOrders(filter: $filter) {
    ...OrderInfo
  }
}
    ${OrderInfoFragmentDoc}`;

/**
 * __useGetOrdersQuery__
 *
 * To run a query within a React component, call `useGetOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrdersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetOrdersQuery(baseOptions?: Apollo.QueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrdersQuery, GetOrdersQueryVariables>(GetOrdersDocument, options);
      }
export function useGetOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrdersQuery, GetOrdersQueryVariables>(GetOrdersDocument, options);
        }
export type GetOrdersQueryHookResult = ReturnType<typeof useGetOrdersQuery>;
export type GetOrdersLazyQueryHookResult = ReturnType<typeof useGetOrdersLazyQuery>;
export type GetOrdersQueryResult = Apollo.QueryResult<GetOrdersQuery, GetOrdersQueryVariables>;
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
    query getOrderById($id: Int!) {
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
    query calculateTotalPrice($input: [CreateOrderDetailInput!]!) {
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
export const CreateOrderDocument = gql`
    mutation createOrder($input: [CreateOrderDetailInput!]!) {
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