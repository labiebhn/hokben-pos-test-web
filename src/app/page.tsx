"use client";
import { CardSummary } from "@/components/cards";
import { METHOD_ORDER } from "@/constants/order";
import { useDashboard } from "@/hooks/home";
import { currency } from "@/utils/helpers";
import moment from "moment";
import Link from "next/link";
import React from "react";

const Dashboard = (props: any) => {
  const { summary, list, isLoading, isListLoading } = useDashboard(props);

  const renderSummary = () => {
    if (isLoading) return <p>Loading...</p>;
    return (
      <div className="flex flex-row gap-6 flex-wrap">
        <CardSummary
          label="Jumlah Transaksi"
          value={summary?.totalTransaction}
        />
        <CardSummary label="Omzet" value={`Rp${currency(summary?.omzet)}`} />
        <CardSummary label="Profit" value={`Rp${currency(summary?.profit)}`} />
        <CardSummary
          label="Jumlah Produk Terjual"
          value={summary?.totalProductSold}
        />
        <CardSummary
          label="Jumlah Kemasan Terpakai"
          value={summary?.totalPackagingSold}
        />
        <CardSummary
          label="Kemasan Terjual"
          value={`Rp${currency(summary?.totalPackagingAmount)}`}
        />
        <CardSummary
          label="Jumlah Pesanan Makan Di Tempat"
          value={summary?.totalDineInSold}
        />
        <CardSummary
          label="Jumlah Pesanan Bawa Pulang"
          value={summary?.totalTakeAwaySold}
        />
      </div>
    );
  };

  const renderTable = () => {
    if (!list) {
      if (isListLoading) return <p>Loading...</p>;
      return;
    }
    return (
      <table className="mt-16 w-full table-auto border-2 border-separate border-spacing-4">
        <thead className="border-2 text-left">
          <tr>
            <th>No</th>
            <th>Tanggal Transaksi</th>
            <th>Invoice</th>
            <th>Metode Pesanan</th>
            <th>Total Transaksi</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item: any, index: any) => {
            return (
              <tr key={index?.toString()}>
                <td>{index + 1}</td>
                <td>{moment(item?.createdAt).format("DD-MM-YYYY HH:mm:ss")}</td>
                <td>{item?.invoice}</td>
                <td>
                  {item?.orderMethod === METHOD_ORDER.DINE_IN
                    ? "Makan Di Tempat"
                    : "Bawa Pulang"}
                </td>
                <td>Rp{currency(item?.grandTotal)}</td>
                <td>
                  <Link href={`/transaction/${item?.id}`}>Lihat Detail</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  return (
    <main className="p-8">
      {renderSummary()}
      {renderTable()}
    </main>
  );
};

export default Dashboard;
