
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-jdqsj6bhuf',
  shadow: true,
})
export class Cjdqsj6bhuf {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  