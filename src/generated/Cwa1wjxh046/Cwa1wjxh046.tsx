
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-wa1wjxh046',
  shadow: true,
})
export class Cwa1wjxh046 {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  