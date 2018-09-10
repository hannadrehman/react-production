import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from './Components/Header/Header.component';
import Body from './Components/Body/Body.component';

import { todoAddTodo, todoRemoveTodo } from './Todo.actions';
import './Todo.styles.scss';

class Todo extends React.Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    addToDoAction: PropTypes.func.isRequired,
    removeTodoAction: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      newTodoText: '',
    };
  }

  handleAddTodo = (val) => {
    const { addToDoAction } = this.props;
    addToDoAction(val);
  }

  handleToDoClick = (ev) => {
    let { target: { dataset: { itemId } } } = ev;
    const { removeTodoAction } = this.props;
    itemId = parseInt(itemId, 10);
    removeTodoAction(itemId);
  }

  render() {
    const { newTodoText } = this.state;
    const { todos } = this.props;
    return (
      <div className="todo todo__wrapper margin--auto" data-item-state={newTodoText}>
        <Header addTodo={this.handleAddTodo} />
        <Body todos={todos} click={this.handleToDoClick} />
      </div>
    );
  }
}
const mapStateToProps = store => ({
  todos: store.modules.todo.todos,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  addToDoAction: todoAddTodo,
  removeTodoAction: todoRemoveTodo,
}, dispatch);
export { Todo, mapStateToProps, mapDispatchToProps };
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
