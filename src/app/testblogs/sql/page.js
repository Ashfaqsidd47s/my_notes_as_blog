import CodeBox from '@/components/codeBox/CodeBox'
import { B } from '@/components/typography/B'
import { Blockquote } from '@/components/typography/Blockquote'
import Code from '@/components/typography/Code'
import { H1 } from '@/components/typography/H1'
import { H2 } from '@/components/typography/H2'
import { H3 } from '@/components/typography/H3'
import { P } from '@/components/typography/P'
import Section from '@/components/typography/Section'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

export default function page() {
    const create_table_code = 
`CREATE TABLE table_name (
    column_name1 datatype constraint,
    column_name2 datatype constraint,
    column_name3 datatype constraint,
)`
    const create_student_table = 
`CREATE TABLE student (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT NOT NULL
)`
    const insert_syntax = 
`INSERT INTO table_name 
(col_name1, col_name2)
VALUES
(col1_val1, col2_val1),
(col1_val2, col2_val2),
(col1_val3, col2_val3);
`
    const insert_data_in_student = 
`INSERT INTO student VALUES(1, "Ashfaq", 23);`
  return (
    <div>
        <H1 className="text-center">SQL</H1>
      <Section>
        <H3> Database</H3>
        <P>A database is an organized collection of data that is stored and accessed electronically.</P>
        <P>It allows users to efficiently store, retrieve, and mangage data.</P>
      </Section>
      <Section>
        <H3> DBMS (DataBase Management System)</H3>
        <P>A DBMS is softwate that interacts with the database to perform operations like storing, retrieving, and managing data. </P>
      </Section>
      <Section>
        <H3> Relational DBMS</H3>
        <P>In RDBMS data is stored in tables, and relationship is established useing primary and foreign keys.</P>
        <H3>No SQL DBMS</H3>
        <P>Non-relational databases designed to handle large volumes of data that don;t fit well in traditional tables.</P>
        <Blockquote>e.g MongoDB, Redis, DynamoDB</Blockquote>
      </Section>
      <Section>
        <H2>SQL ( Structured Query Language )</H2>
        <P></P><B>Creating DATABASE in SQL</B>
        <P><Code>CREATE DATABASE database_name;</Code></P>
        <B>Remove Database in SQL</B>
        <P><Code>DROP DATABASE database_name;</Code></P>
      </Section>
      <Section>
        <H3>Creating table in sql</H3>
        <CodeBox title="createTable.sql" code={create_table_code}/>
        <B>Creating Student Table</B> 
        <CodeBox title="student.sql" code={create_student_table}/>
        <P className="mt-5"><B>Inseting data into student table </B> </P>
        <CodeBox title="student.sql" code={insert_data_in_student}/>
      </Section>
      <Section>
        <H3>SQL Data Type</H3>
        <Table className=" w-[calc(100%-1.5rem)] m-3 shadow-md">
            <TableHeader className=" bg-gray-200" >

                <TableHead>Data Type</TableHead>
                <TableHead>Description</TableHead>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>INT</TableCell>
                    <TableCell>integer </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>TINYINT</TableCell>
                    <TableCell>integer ranging ( -128 to 127 )</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>BIGINT</TableCell>
                    <TableCell>integer (range: -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>FLOAT</TableCell>
                    <TableCell>Single-precision floating-point number</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>DOUBLE</TableCell>
                    <TableCell>Double-precision floating-point number.</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>BIT</TableCell>
                    <TableCell>Stores bit-field values.</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>BOOLEAN</TableCell>
                    <TableCell>Boolean type (TRUE or FALSE), stored as TINYINT(1) with 1 for TRUE and 0 for FALSE.</TableCell>
                </TableRow>
            </TableBody>
        </Table>
      </Section>
      <Section>
        <H3 className="">Types of SQL Commands</H3>
        <P><b>DDL ( Data Definition Language ):</b> Create, alter, rename, truncate & drop</P>
        <P><b>DQL ( Data Query Language ):</b> Select</P>
        <P><b>DML ( Data Manipulation Language ):</b> Insert, Update, & Delete</P>
        <P><b>DCL ( Data Control Language ):</b> grant & revoke permission to User</P>
        <P><b>TCL ( Transaction Control Language ):</b> Start transaction, commit, rollback</P>
      </Section>
      <Section>
        <H3>Database Related Quries </H3>
        <P>Create Database </P>
        <Code>CREATE DATABASE database_name;</Code>
        <P>Create Database if the database does not exist</P>
        <Code>CREATE DATABASE IF NOT EXISTS database_name;</Code>
        <P>To remove a database if it exists</P>
        <Code>DROP DATABASE IF EXISTS database_name;</Code>
        <P>Command to show all databases </P>
        <Code>SHOW DATABASES;</Code>
        <P>Command to show all tables </P>
        <Code>SHOW TABLES;</Code>

      </Section>
      <Section>
        <H3>Table Related Quries </H3>
        <Code>CREATE TABLE table_name ();</Code>
        <P className=" font-semibold" >Select & view all columns</P>
        <Code>SELECT * FROM table_name;</Code>
        <P className=" font-semibold" >Insert Into table </P>
        <CodeBox title="student.sql" code={insert_syntax} />
        
      </Section>
    </div>
  )
}
