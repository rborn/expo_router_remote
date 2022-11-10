"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _expoRouter = require("expo-router");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var Greeting = function Greeting(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/ _react["default"].createElement(
    _reactNative.View,
    {
      style: styles.container
    },
    /*#__PURE__*/ _react["default"].createElement(
      _reactNative.Text,
      {
        style: {
          backgroundColor: color
        }
      },
      "Hi from server!"
    ),
    /*#__PURE__*/ _react["default"].createElement(
      _expoRouter.Link,
      {
        href: "/",
        style: styles.link
      },
      "Go Back"
    )
  );
};
var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  link: {
    color: "blue",
    margin: 10
  }
});
var _default = Greeting;
exports["default"] = _default;
