
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-sv84ghh89r',
  shadow: true,
})
export class Csv84ghh89r {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  