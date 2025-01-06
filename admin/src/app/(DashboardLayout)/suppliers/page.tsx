"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import DashboardCard from "../components/shared/DashboardCard";
import { useQuery } from "@tanstack/react-query";
import { getAllSuppliers } from "@/api/suppliers";
import { IconPencil } from "@tabler/icons-react";
import { Delete } from "@mui/icons-material";
import Link from "next/link";

const Suppliers = () => {
  const suppliersQuery = useQuery({
    queryKey: ["suppliers"],
    queryFn: getAllSuppliers,
  });

  return (
    <DashboardCard title="Suppliers List">
      <Box sx={{ overflow: "auto", width: { xs: "280px", sm: "auto" } }}>
        <Link href={"/suppliers/add"}>Add Supplier</Link>
        <Table
          aria-label="simple table"
          sx={{
            whiteSpace: "nowrap",
            mt: 2,
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Supplier Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Contact Name
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="subtitle2" fontWeight={600}>
                  Phone Number
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="subtitle2" fontWeight={600}>
                  Email
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="subtitle2" fontWeight={600}>
                  Notes
                </Typography>
              </TableCell>
              <TableCell align="right" colSpan={2}>
                <Typography variant="subtitle2" fontWeight={600}>
                  Actions
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {suppliersQuery.data?.map((supplier: any) => (
              <TableRow key={supplier.supplierName}>
                <TableCell>
                  <Typography variant="h6">{supplier.supplierName}</Typography>
                </TableCell>

                <TableCell>
                  <Typography variant="h6">{supplier.contactName}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">{supplier.phoneNumber}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">{supplier.email}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">{supplier.notes}</Typography>
                </TableCell>

                <TableCell align="right">
                  <Typography variant="h6" style={{ cursor: "pointer" }}>
                    <IconPencil stroke={1.5} size="1.3rem" />
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6" style={{ cursor: "pointer" }}>
                    <Delete />
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </DashboardCard>
  );
};

export default Suppliers;
