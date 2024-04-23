
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-2jdap6s83q',
  shadow: true,
})
export class C2jdap6s83q {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  