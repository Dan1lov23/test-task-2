import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type {Product} from "../../interfaces/Interfaces.tsx";

interface StoreState {

    products: Product[];

    catalog: Product[];

    productForTemplate: any | Product[];

    addProduct: (product: Product) => void;
    removeProduct: (id: number) => void;

    addInFavorite: (product: Product) => void;
    toggleFavorite: (id: number) => void;

    setCatalog: (newCatalog: Product[]) => void;

    setProductForTemplate: (newProduct: Product) => void;
}

export const useStore = create<StoreState>()(
    persist(
        (set) => ({
            products: [
                {
                    id: 1,
                    name: "keyboard 1",
                    price: 12000,
                    isFavorite: false,
                    description: "It is a keyboard 1, you can buy this product in our shop",
                    type: "mechanical",
                    keyNum: 123,
                    connectionType: "wired",
                    color: "black",
                },
                {
                    id: 2,
                    name: "keyboard 2",
                    price: 10000,
                    isFavorite: false,
                    description: "It is a keyboard 2, you can buy this product in our shop",
                    type: "mechanical",
                    keyNum: 123,
                    connectionType: "wired",
                    color: "black",
                },
                {
                    id: 3,
                    name: "keyboard 3",
                    price: 14000,
                    isFavorite: false,
                    description: "It is a keyboard 3, you can buy this product in our shop",
                    type: "mechanical",
                    keyNum: 123,
                    connectionType: "wired",
                    color: "black",
                },
                {
                    id: 4,
                    name: "keyboard 4",
                    price: 19000,
                    isFavorite: false,
                    description: "It is a keyboard 4, you can buy this product in our shop",
                    type: "mechanical",
                    keyNum: 123,
                    connectionType: "wired",
                    color: "black",
                }
            ],
            catalog: [
                {
                    id: 1,
                    name: "keyboard 1",
                    price: 12000,
                    isFavorite: false,
                    description: "It is a keyboard 1, you can buy this product in our shop",
                    type: "mechanical",
                    keyNum: 123,
                    connectionType: "wired",
                    color: "black",
                },
                {
                    id: 2,
                    name: "keyboard 2",
                    price: 10000,
                    isFavorite: false,
                    description: "It is a keyboard 2, you can buy this product in our shop",
                    type: "mechanical",
                    keyNum: 123,
                    connectionType: "wired",
                    color: "black",
                },
                {
                    id: 3,
                    name: "keyboard 3",
                    price: 14000,
                    isFavorite: false,
                    description: "It is a keyboard 3, you can buy this product in our shop",
                    type: "mechanical",
                    keyNum: 123,
                    connectionType: "wired",
                    color: "black",
                },
                {
                    id: 4,
                    name: "keyboard 4",
                    price: 19000,
                    isFavorite: false,
                    description: "It is a keyboard 4, you can buy this product in our shop",
                    type: "mechanical",
                    keyNum: 123,
                    connectionType: "wired",
                    color: "black",
                }
            ],
            productForTemplate: [],
            addProduct: (product: Product) =>
                set((state) => ({ products: [...state.products, product] })),

            removeProduct: (id: number) =>
                set((state) => ({
                    products: state.products.filter((product) => product.id !== id),
                    catalog: state.catalog.filter((product) => product.id !== id),
                })),

            addInFavorite: (product: Product) =>
                set((state) => ({
                    products: state.products.map((p) =>
                        p.id === product.id ? { ...p, isFavorite: true } : p
                    ),
                })),

            setCatalog: (newCatalog: Product[]) => set((state) => ({ catalog: [...state.catalog = newCatalog] })),

            toggleFavorite: (id: number) =>
                set((state) => ({
                    products: state.products.map((p) =>
                        p.id === id ? { ...p, isFavorite: !p.isFavorite } : p
                    ),
                })),

            setProductForTemplate: (newProduct: Product) =>
                set(() => ({ productForTemplate: newProduct }))
        }),
        {
            name: 'counter-store-123',
        }
    )
);
