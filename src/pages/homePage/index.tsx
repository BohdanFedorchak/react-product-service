import Card from '@/components /Card'
import { useProducts } from '@/hooks/useProducts'

export default function HomePage() {
    const { data, isLoading, error } = useProducts()
    if (error) return <div>Error</div>

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (data) {
        const { products } = data
        return (
            <>
                {products && (
                    <div className="grid grid-cols-4 gap-4 mx-auto">
                        {products.map((product) => (
                            <Card
                                key={product.id}
                                title={product.title}
                                img={product.thumbnail}
                            />
                        ))}
                    </div>
                )}
            </>
        )
    }
}
