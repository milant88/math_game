var StarsFrame = React.createClass({
    render: function () {
        var numberOfStars = Math.floor(Math.random() * 9) + 1;

        var stars = [];
        for (var i = 0; i < numberOfStars; i++) {
            stars.push(React.createElement("span", { className: "glyphicon glyphicon-star" }));
        }

        return React.createElement(
            "div",
            { id: "stars-frame" },
            React.createElement(
                "div",
                { className: "well" },
                stars
            )
        );
    }
});

var ButtonFrame = React.createClass({
    render: function () {
        return React.createElement(
            "div",
            { id: "button-frame" },
            React.createElement(
                "button",
                { className: "btn btn-primary btn-lg" },
                "="
            )
        );
    }
});

var AnswerFrame = React.createClass({
    render: function () {

        return React.createElement(
            "div",
            { id: "answer-frame" },
            React.createElement("div", { className: "well" })
        );
    }
});

var NumbersFrame = React.createClass({
    render: function () {

        var numbers = [];

        for (var i = 1; i <= 9; i++) {
            numbers.push(React.createElement(
                "div",
                { className: "number" },
                i
            ));
        }

        return React.createElement(
            "div",
            { id: "numbers-frame" },
            React.createElement(
                "div",
                { className: "well" },
                numbers
            )
        );
    }
});

var Game = React.createClass({
    render: function () {
        return React.createElement(
            "div",
            { id: "game" },
            React.createElement(
                "h2",
                null,
                "Play Nine"
            ),
            React.createElement("hr", null),
            React.createElement(
                "div",
                { className: "clearfix" },
                React.createElement(StarsFrame, null),
                React.createElement(ButtonFrame, null),
                React.createElement(AnswerFrame, null)
            ),
            React.createElement(NumbersFrame, null)
        );
    }
});

ReactDOM.render(React.createElement(Game, null), document.getElementById('container'));