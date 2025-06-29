create table customers (
   customerid   number primary key,
   name         varchar2(50),
   age          number,
   balance      number(10,2),
   interestrate number(5,2),
   isvip        varchar2(5)
);

create table loans (
   loanid     number primary key,
   customerid number,
   amount     number(10,2),
   duedate    date,
   foreign key ( customerid )
      references customers ( customerid )
);

insert into customers values ( 1,
                               'Alice',
                               65,
                               15000.00,
                               7.5,
                               'FALSE' );
insert into customers values ( 2,
                               'Bob',
                               45,
                               8000.00,
                               6.0,
                               'TRUE' );
insert into customers values ( 3,
                               'Charlie',
                               70,
                               5000.00,
                               8.0,
                               'FALSE' );
insert into customers values ( 4,
                               'Diana',
                               30,
                               12000.00,
                               6.5,
                               'FALSE' );
                               
insert into loans values ( 201,
                           1,
                           50000.00,
                           sysdate + 10 );
insert into loans values ( 202,
                           2,
                           30000.00,
                           sysdate + 40 );
insert into loans values ( 203,
                           3,
                           20000.00,
                           sysdate + 5 );
insert into loans values ( 204,
                           4,
                           10000.00,
                           sysdate + 60 );

--SCENARIO 1
begin
   for rec in (
      select *
        from customers
       where age > 60
   ) loop
      update customers
         set
         interestrate = interestrate - 1
       where customerid = rec.customerid;
   end loop;
   commit;
end;
/

select customerid,
       name,
       age,
       interestrate
  from customers
 where age > 60;
 
 --SCENARIO 2
begin
   for rec in (
      select *
        from customers
       where balance > 10000
   ) loop
      update customers
         set
         isvip = 'Y'
       where customerid = rec.customerid;
   end loop;
   commit;
end;
/

select customerid,
       name,
       balance,
       isvip
  from customers
 where isvip = 'TRUE';
 
 
 --SCENARIO 3
begin
   for rec in (
      select l.loanid,
             c.name,
             l.duedate
        from loans l
        join customers c
      on c.customerid = l.customerid
       where l.duedate between sysdate and sysdate + 30
   ) loop
      dbms_output.put_line('Reminder: Loan ID '
                           || rec.loanid
                           || ' for '
                           || rec.name
                           || ' is due on '
                           || to_char(
         rec.duedate,
         'DD-MON-YYYY'
      ));
   end loop;
end;
/


select *
  from customers;
select *
  from loans;