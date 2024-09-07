"use client";
import { METHOD_ORDER } from "@/constants/order";
import { useTransactionDetail } from "@/hooks/transactionDetail";
import { currency } from "@/utils/helpers";
import moment from "moment";
import React from "react";

const TransactionDetail = (props: any) => {
  const { data, isLoading } = useTransactionDetail(props);

  if (isLoading) return <p>Loading...</p>;

  const renderHeader = () => {
    return (
      <div className="flex flex-col gap-2">
        <p className="text-lg">Invoice: {data?.invoice}</p>
        <p className="text-lg">
          Tanggal Transaksi:{" "}
          {moment(data?.createdAt).format("DD-MM-YYYY HH:mm:ss")}
        </p>
        <p className="text-lg">
          Metode Pesanan:{" "}
          {data?.orderMethod === METHOD_ORDER.DINE_IN
            ? "Makan Di Tempat"
            : "Bawa Pulang"}
        </p>
        <p className="text-lg">Subtotal: Rp{currency(data?.productTotal)}</p>
        <p className="text-lg">
          Biaya Kemasan: Rp{currency(data?.packagingTotal)}
        </p>
        <p className="text-lg">
          Total Transaksi: Rp{currency(data?.grandTotal)}
        </p>
      </div>
    );
  };

  const renderTable = () => {
    return (
      <table className="mt-16 w-full table-auto border-2 border-separate border-spacing-4">
        <thead className="border-2 text-left">
          <tr>
            <th>No</th>
            <th>Nama Produk</th>
            <th>Harga Produk</th>
            <th>Jumlah Pembelian</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {data?.transactionDetails.map((item: any, index: any) => {
            return (
              <tr key={index?.toString()}>
                <td>{index + 1}</td>
                <td>{item?.product?.name}</td>
                <td>Rp{currency(item?.productPrice)}</td>
                <td>{item?.qty}</td>
                <td>Rp{currency(item?.total)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  return (
    <div className="p-8">
      {renderHeader()}
      {renderTable()}
    </div>
  );
};

export default TransactionDetail;
