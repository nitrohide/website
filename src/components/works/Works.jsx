import "./works.scss";
import libraryimage from "../../assets/librarykioskimage.jpg";
import payrollimage from "../../assets/payrollimage.jpg";
import trainimage from "../../assets/trainbookingimage.jpg";
import donutimage from "../../assets/donut.jpeg";
import wtfimage from "../../assets/wtfimage.png";
import predictimage from "../../assets/predictive.jpg";
import compressorimage from "../../assets/compressorimage.svg";
import javaicon from "../../assets/javaicon.png";
import javascripticon from "../../assets/javascripticon.png";
import awsicon from "../../assets/awsicon.png";
import cssicon from "../../assets/CSSicon.png";
import htmlicon from "../../assets/HTMLicon.png";
import mysqlicon from "../../assets/mysqlicon.png";
import javafxicon from "../../assets/javafxicon.png";
import androidstudioicon from "../../assets/AndroidStudioicon.png";
import cicon from "../../assets/c-icon.png";
import pythonicon from "../../assets/pythonicon.png";
import Grid from "@mui/material/Grid";

export default function Works() {
  return (
    <div className="works" id="works">
      <h1>Projects</h1>
      <Grid className="worksContainer" container spacing={4}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className="card">
            <img className="trainimage" src={trainimage} alt="" />
            <div className="cardTitle">
              <h2>Train Booking Database</h2>
            </div>
            <div
              className="cardInfo"
              onClick={() => {
                window.open(
                  "https://github.com/mustafa-sadiq/railway-booking-system",
                  "_blank"
                );
              }}
            >
              <h3>Train Booking Database</h3>
              <body>
                Web Application where users can query specific train schedules
                and book trips and ask questions in a public forum. Admins and
                customer reps can answer questions, edit schedules, and produce
                different statistics based on user tickets.
              </body>
              <li>
                <img src={mysqlicon} alt="" />
                <img src={javascripticon} alt="" />
                <img src={htmlicon} alt="" />
                <img src={cssicon} alt="" />
                <img src={awsicon} alt="" />
              </li>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className="card">
            <img className="payrollimage" src={payrollimage} alt="" />
            <div className="cardTitle">
              <h2>Payroll Processing System</h2>
            </div>
            <div
              className="cardInfo"
              onClick={() => {
                window.open(
                  "https://github.com/nitrohide/Payroll-Processing-System",
                  "_blank"
                );
              }}
            >
              <h3>Payroll Processing System</h3>
              <body>
                A program that handles payroll aspects such as modifying
                employees, calculating payments, printing earning statements,
                and managing working hours of part time employees. Tested using
                JUnit testing, designed with OO concepts like inheritance,
                polymorphism, and encapsulation.
              </body>
              <li className="payrollprocessinglogos">
                <img src={javaicon} alt="" />
                <img className="javafxicon" src={javafxicon} alt="" />
              </li>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className="card">
            <img className="donutimage" src={donutimage} alt="" />
            <div className="cardTitle">
              <h2>Donut Shop</h2>
            </div>
            <div
              className="cardInfo"
              onClick={() => {
                window.open(
                  "https://github.com/nitrohide/Donut-Shop-App",
                  "_blank"
                );
              }}
            >
              <h3>Donut Shop</h3>
              <body>
                An Android application that allows users to order donuts and
                coffee. Users can customize their orders by changing quantity or
                sizes and choosing from an assortment flavors and add-ins. Users
                can also preview their cart before placing orders or cancelling
                orders already placed.
              </body>
              <li>
                <img src={javaicon} alt="" />
                <img className="javafxicon" src={androidstudioicon} alt="" />
              </li>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className="card">
            <img className="libraryimage" src={libraryimage} alt="" />
            <div className="cardTitle">
              <h2>Library Kiosk</h2>
            </div>
            <div
              className="cardInfo"
              onClick={() => {
                window.open(
                  "https://github.com/nitrohide/Library-Kiosk",
                  "_blank"
                );
              }}
            >
              <h3>Library Kiosk</h3>
              <body>
                A program where users can add, remove, checkout, and return
                books from a "library". Users can also print out the library
                catalog with different filters and sorting methods.
              </body>
              <li>
                <img src={javaicon} alt="" />
              </li>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className="card">
            <img className="wtfimage" src={wtfimage} alt="" />
            <div className="cardTitle">
              <h2>Where's the File</h2>
            </div>
            <div
              className="cardInfo"
              onClick={() => {
                window.open(
                  "https://github.com/nitrohide/Wheres-The-File",
                  "_blank"
                );
              }}
            >
              <h3>Where's the File</h3>
              <body>
                Where’s the file allows two programs, the server and the client,
                to communicate with each other to maintain a version control
                system. This allow multiple people to work on the same version
                of code at once, similar to Git. Users can Commit, Push, and
                rollback to previous versions.
              </body>
              <li>
                <img src={cicon} alt="" />
              </li>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className="card">
            <img className="compressorimage" src={compressorimage} alt="" />
            <div className="cardTitle">
              <h2>File Compressor</h2>
            </div>
            <div
              className="cardInfo"
              onClick={() => {
                window.open(
                  "https://github.com/nitrohide/File-Compressor",
                  "_blank"
                );
              }}
            >
              <h3>File Compressor</h3>
              <body>
                File Compressor can read a given file and build a BST to create
                a "codebook", this codebook allows the program to compress the
                file to take less memory. It can also decompress files to make
                them readable again.
              </body>
              <li>
                <img src={cicon} alt="" />
              </li>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className="card">
            <img className="predictimage" src={predictimage} alt="" />
            <div className="cardTitle">
              <h2>Predict Future Sales</h2>
            </div>
            <div
              className="cardInfo"
              onClick={() => {
                window.open(
                  "https://github.com/nitrohide/Predict-Future-Sales",
                  "_blank"
                );
              }}
            >
              <h3>Predict Future Sales</h3>
              <body>
                Used data preparation and exploration to translate raw data into
                usable data for modelling. Trained refined data with machine
                learning algorithms and decision trees to predict next month's
                sales of a software firm. Scored top 1% of submissions on Kaggle
                competition.
              </body>
              <li>
                <img src={pythonicon} alt="" />
              </li>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
