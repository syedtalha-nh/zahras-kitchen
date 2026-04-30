import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type PlaceOrderResult = {
    __kind__: "ok";
    ok: OrderSummary;
} | {
    __kind__: "err";
    err: string;
};
export interface OrderSummary {
    status: OrderStatus;
    total: bigint;
    createdAt: Timestamp;
    orderId: OrderId;
    items: Array<OrderSummaryItem>;
    subtotal: bigint;
}
export type Timestamp = bigint;
export interface OrderSummaryItem {
    itemId: ItemId;
    name: string;
    lineTotal: bigint;
    quantity: bigint;
    unitPrice: bigint;
}
export interface MenuItem {
    id: ItemId;
    name: string;
    description: string;
    category: Category;
    price: bigint;
}
export type ItemId = bigint;
export interface Cart {
    total: bigint;
    items: Array<CartItem>;
    subtotal: bigint;
}
export interface CartItem {
    itemId: ItemId;
    quantity: bigint;
}
export type OrderId = bigint;
export enum Category {
    desserts = "desserts",
    appetizers = "appetizers",
    mainCourses = "mainCourses",
    drinks = "drinks"
}
export enum OrderStatus {
    pending = "pending",
    confirmed = "confirmed"
}
export interface backendInterface {
    addToCart(itemId: ItemId, quantity: bigint): Promise<void>;
    clearCart(): Promise<void>;
    getCart(): Promise<Cart>;
    getMenuItem(id: ItemId): Promise<MenuItem | null>;
    getMenuItems(): Promise<Array<MenuItem>>;
    getMenuItemsByCategory(category: Category): Promise<Array<MenuItem>>;
    getOrderSummary(): Promise<OrderSummary | null>;
    placeOrder(): Promise<PlaceOrderResult>;
    removeFromCart(itemId: ItemId): Promise<void>;
    updateCartItem(itemId: ItemId, quantity: bigint): Promise<void>;
}
