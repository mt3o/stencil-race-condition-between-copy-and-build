
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-bzn7pzxw81',
  shadow: true,
})
export class Cbzn7pzxw81 {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  