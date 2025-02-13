import { getProducts } from "@/sanity/utils/page"; // ✅ API function import karein
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default async function ShopPage() {
    const products = await getProducts(); 

    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                <Grid container spacing={2} sx={{ p: 2 }}>
                    {products.length > 0 ? (
                        products.map((product: { _id: string, ProductName: string, price: number, imageUrl: string }) => (
                            <Grid key={product._id} item xs={6} sm={3} md={3} lg={3}>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image={product.imageUrl}
                                    alt={product.ProductName}
                                    sx={{
                                        objectFit: "cover",
                                        width: '100%',
                                        height: '250px',
                                    }}
                                />
                                <Typography variant="h6" component="div" sx={{ textAlign: 'center', mt: 1 }}>
                                    {product.ProductName}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                                    Rs. {product.price}
                                </Typography>
                            </Grid>
                        ))
                    ) : (
                        <Typography variant="h6" sx={{ textAlign: 'center', p: 2 }}>
                            No Products Found
                        </Typography>
                    )}
                </Grid>
            </Card>
        </Box>
    );
}
