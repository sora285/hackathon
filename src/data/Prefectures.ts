export interface Checkpoint {
  id: number;
  name: string;
  x: number;
  y: number;
  event?: 'goal' | null;
}

export const Prefectures: Checkpoint[] = [
    { id: 1, name: '北海道', x: 211.67, y: 52.73 },
    { id: 2, name: '青森県', x: 199.37, y: 89.06 },
    { id: 3, name: '岩手県', x: 191.89, y: 98.88 },
    { id: 4, name: '宮城県', x: 207.71, y: 103.86 },
    { id: 5, name: '秋田県', x: 206.69, y: 116.89 },
    { id: 6, name: '山形県', x: 193.36, y: 117.33 },
    { id: 7, name: '福島県', x: 199.37, y: 133.3 },
    { id: 8, name: '茨城県', x: 176.22, y: 132.42 },
    { id: 9, name: '栃木県', x: 182.67, y: 148.39 },
    { id: 10, name: '群馬県', x: 192.33, y: 145.61 },
    { id: 11, name: '埼玉県', x: 201.71, y: 149.85 },
    { id: 12, name: '千葉県', x: 198.34, y: 159.96 },
    { id: 13, name: '東京都', x: 183.11, y: 154.54 },
    { id: 14, name: '神奈川県', x: 188.38, y: 159.81 },
    { id: 15, name: '新潟県', x: 189.4, y: 163.92 },
    { id: 16, name: '富山県', x: 178.42, y: 160.55 },
    { id: 17, name: '石川県', x: 174.9, y: 165.38 },
    { id: 18, name: '福井県', x: 166.7, y: 168.6 },
    { id: 19, name: '山梨県', x: 171.53, y: 145.17 },
    { id: 20, name: '長野県', x: 164.06, y: 138.72 },
    { id: 21, name: '岐阜県', x: 157.68, y: 142.82 },
    { id: 22, name: '静岡県', x: 161.43, y: 156.15 },
    { id: 23, name: '愛知県', x: 148.68, y: 153.08 },
    { id: 24, name: '三重県', x: 152.49, y: 162.16 },
    { id: 25, name: '滋賀県', x: 159.81, y: 177.83 },
    { id: 26, name: '京都府', x: 152.2, y: 176.07 },
    { id: 27, name: '大阪府', x: 147.95, y: 182.81 },
    { id: 28, name: '兵庫県', x: 143.55, y: 170.36 },
    { id: 29, name: '奈良県', x: 140.48, y: 157.03 },
    { id: 30, name: '和歌山県', x: 134.33, y: 161.28 },
    { id: 31, name: '鳥取県', x: 124.07, y: 154.98 },
    { id: 32, name: '島根県', x: 125.68, y: 163.33 },
    { id: 33, name: '岡山県', x: 133.45, y: 180.18 },
    { id: 34, name: '広島県', x: 135.35, y: 187.21 },
    { id: 35, name: '山口県', x: 120.41, y: 191.75 },
    { id: 36, name: '徳島県', x: 120.56, y: 184.57 },
    { id: 37, name: '香川県', x: 116.16, y: 166.26 },
    { id: 38, name: '愛媛県', x: 109.86, y: 162.6 },
    { id: 39, name: '高知県', x: 105.91, y: 168.46 },
    { id: 40, name: '福岡県', x: 102.1, y: 185.01 },
    { id: 41, name: '佐賀県', x: 104.44, y: 198.63 },
    { id: 42, name: '長崎県', x: 98.14, y: 206.98 },
    { id: 43, name: '熊本県', x: 94.63, y: 194.53 },
    { id: 44, name: '大分県', x: 92.58, y: 182.81 },
    { id: 45, name: '宮崎県', x: 84.38, y: 184.13 },
    { id: 46, name: '鹿児島県', x: 80.71, y: 189.55 },
    { id: 47, name: '沖縄県', x: 29.3, y: 283.01, event: 'goal' },
  
];