import { AdminTitle } from "@/admin/components/AdminTitle"
import { Button } from "@/components/ui/button"
import { CustomFullScreenLoading } from "@/components/ui/custom/CustomFullScreenLoading"
import { CustomPagination } from "@/components/ui/custom/CustomPagination"
import  { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { useProducts } from "@/shop/hooks/useProducts"
import { PlusIcon } from "lucide-react"
import { Link } from "react-router"


export const AdminProductsPage = () => {

const {data, isLoading} = useProducts()

if(isLoading){
  return (
    <CustomFullScreenLoading/>
  )
}

  return (
    <>

    <div className="flex justify-between items-center">
    <AdminTitle title="Productos" subtitle="Administra tus productos"/>
<div className="flex justify-end mb-10 gap-4">

    <Link to='/admin/products/new'>
    <Button>
      <PlusIcon />
      Nuevo producto
    </Button>
    </Link>
</div>
    </div>
    <Table className="bg-white p-10 shadow-xs border-gray-200 mb-10">
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">ID</TableHead>
      <TableHead>Imagen</TableHead>
      <TableHead>Nombre</TableHead>
      <TableHead>Precio</TableHead>
      <TableHead>Categoría</TableHead>
      <TableHead>Stock</TableHead>
      <TableHead>Tallas</TableHead>
      <TableHead className="text-right">Acciones</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {
      data?.products.map((product,index)=>(
    <TableRow key={product.id}>
      <TableCell className="font-medium">{index}</TableCell>
      <TableCell> <img src={product.images[0]} alt={product.title} className="w-20 h-20 object-cover rounded-md"></img></TableCell>
      <TableCell>{product.title}</TableCell>
      <TableCell>{product.price}</TableCell>
      <TableCell>{product.gender}</TableCell>
      <TableCell>{product.stock}</TableCell>
      <TableCell>{product.sizes.join(', ')}</TableCell>
      <TableCell className="text-right"><Link to={`/admin/products/${product.id}`}>Editar</Link></TableCell>
    </TableRow>
      ))
    }
    {/* <TableRow>
      <TableCell className="font-medium">1</TableCell>
      <TableCell> <img src="https://placehold.co/250x250" alt="prod 1" className="w-20 h-20 object-cover rounded-md"></img></TableCell>
      <TableCell>Producto 1</TableCell>
      <TableCell>$250.00</TableCell>
      <TableCell>Categoria 1</TableCell>
      <TableCell>10</TableCell>
      <TableCell>M,S,XS</TableCell>
      <TableCell className="text-right"><Link to={'/admin/products/t-shirt'}>Editar</Link></TableCell>
    </TableRow> */}
  </TableBody>
</Table>
<CustomPagination totalPages={data?.pages || 0}/>
    </>
  )
}
