import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import { getProduct, deleteProduct } from "../../actions/productAction";

function ProductList() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const deleteProductHandler = (id) => {
    console.log("id =", id);
    dispatch(deleteProduct(id));
  };

  const columns = [
    {
      field: "id",
      headerName: "Product ID",
      minWidth: 230,
      flex: 0.5,
      headerClassName: "bg-gray-200",
    },
    {
      field: "name",
      headerName: "Name",
      minWidth: 150,
      flex: 0.5,
      headerClassName: "bg-gray-200 hidden sm:table-cell",
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      minWidth: 100,
      flex: 0.5,
      headerClassName: "bg-gray-200 hidden sm:table-cell",
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      minWidth: 200,
      flex: 0.5,
      headerClassName: "bg-gray-200 hidden sm:table-cell",
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      sortable: false,
      minWidth: 230,
      headerClassName: "bg-gray-300",
      renderCell: (params) => {
        return (
          <>
            <Link to={`/admin/product/${params.row.id}`}>
              <EditIcon className="mx-2" sx={{ color: "blue" }} />
            </Link>
            <button
              onClick={() => deleteProductHandler(params.row.id)}
              className="text-red-600"
            >
              <Delete className="mx-2" sx={{ color: "red" }} />
            </button>
          </>
        );
      },
    },
  ];

  const rows = [];

  products.data &&
    products.data.forEach((item) => {
      rows.push({
        id: item._id,
        stock: item.Stock,
        price: item.price,
        name: item.name,
      });
    });

  return (
    <div className="mt-10 flex-col">
      <div className="flex flex-col">
        <div className="container mx-auto p-4">
          <h4 className="text-xl font-bold mb-4">ALL PRODUCTS</h4>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="bg-white rounded-lg shadow"
            autoHeight
          />
        </div>
      </div>
    </div>
  );
}

export default ProductList;