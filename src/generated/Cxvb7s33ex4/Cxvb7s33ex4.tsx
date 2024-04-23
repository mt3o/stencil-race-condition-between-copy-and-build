
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-xvb7s33ex4',
  shadow: true,
})
export class Cxvb7s33ex4 {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  