import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 制作物カード情報の型定義
type Product = {
    description: string;
};

// 初期状態
const initialState: Product = {
    description: 'テスト',
};

// Redux Slice の作成
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        updateProduct: (state, action: PayloadAction<Partial<Product>>) => {
            return { ...state, ...action.payload };
        },
    },
});

// アクションとリデューサーのエクスポート
export const { updateProduct } = productSlice.actions;
export default productSlice.reducer;
