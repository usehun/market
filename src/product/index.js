import { useParams } from 'react-router-dom';

function ProductPage() {
    const {id} = useParams();
    
    return <h1>메뉴 페이지 {id}메뉴</h1>
}

export default ProductPage;