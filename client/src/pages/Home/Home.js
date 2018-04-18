import React, { Component } from "react";
// import Card from "../../components/Card";
// import Form from "../../components/Form";
import Article from "../../components/Article";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import API from "../../utils/API";
// import { Col, Row, Container } from "../../components/Grid";
import { List } from "../../components/List";
import { Card, CardTitle, Col, Row, Container } from 'react-materialize'

class Home extends Component {
  state = {
    articles: [],
    q: "",
    start_year: "",
    end_year: "",
    message: "Search For Articles To Begin!"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getArticles = () => {
    API.getArticles({
      q: this.state.q,
      start_year: this.state.start_year,
      end_year: this.state.end_year
    })
      .then(res =>
        this.setState({
          articles: res.data,
          message: !res.data.length
            ? "No New Articles Found, Try a Different Query"
            : ""
        })
      )
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getArticles();
  };

  handleArticleSave = id => {
    const article = this.state.articles.find(article => article._id === id);
    API.saveArticle(article).then(res => this.getArticles());
  };

  render() {
    return (
      <div>
          <Header />
          <Container>
            <Row>
              <Col s={12} m={4} className='home-info'>
              <Card header={<CardTitle reveal image={"https://image.freepik.com/free-vector/pack-of-colorful-square-emoticons_23-2147589525.jpg"} waves='light' />}
                    title="Card Title"
                    reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                    <p><a href="#">This is a link</a></p>
                  </Card>
              </Col>
              <Col s={12} m={4} className='home-info'>
              <Card header={<CardTitle reveal image={"https://image.freepik.com/free-vector/pack-of-colorful-square-emoticons_23-2147589525.jpg"} waves='light' />}
                    title="Card Title"
                    reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                    <p><a href="#">This is a link</a></p>
                  </Card>
              </Col>
              <Col s={12} m={4} className='home-info'>
              <Card header={<CardTitle reveal image={"https://image.freepik.com/free-vector/pack-of-colorful-square-emoticons_23-2147589525.jpg"} waves='light' />}
                    title="Card Title"
                    reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                    <p><a href="#">This is a link</a></p>
                  </Card>
              </Col>
            </Row>
            <Row>
              <Col size="md-12">
                <Card title="Results">
                  {this.state.articles.length ? (
                    <List>
                      {this.state.articles.map(article => (
                        <Article
                          key={article._id}
                          _id={article._id}
                          title={article.headline.main}
                          url={article.web_url}
                          date={article.pub_date}
                          handleClick={this.handleArticleSave}
                          buttonText="Save Article"
                        />
                      ))}
                    </List>
                  ) : (
                    <h2 className="text-center">{this.state.message}</h2>
                  )}
                </Card>
              </Col>
            </Row>
          </Container>
        <Footer />
      </div>
    );
  }
}

export default Home;
